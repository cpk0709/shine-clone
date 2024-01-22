# copy files to target by group name
if [ "$DEPLOYMENT_GROUP_NAME" == "code-deploy-group-onlif-landing-dev" ]; then
  # Copy to dev
  cp -R /home/ubuntu/onlif-landing-tmp/. /home/ubuntu/onlif-landing-dev

  rm -f /home/ubuntu/onlif-landing-dev/nginx/conf.d/nginx.conf
  mv /home/ubuntu/onlif-landing-dev/nginx/conf.d/nginx-development.conf /home/ubuntu/onlif-landing-dev/nginx/conf.d/nginx.conf

  chown -R ubuntu:ubuntu /home/ubuntu/onlif-landing-dev
  cd /home/ubuntu/onlif-landing-dev
  aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 120122301167.dkr.ecr.ap-northeast-2.amazonaws.com/onlif-landing
  docker-compose -f docker-compose-development.yml pull
  docker-compose -f docker-compose-development.yml up -d

  # find container name
  container_name=$(docker ps --format "{{.Names}}" --filter "name=obliv")

  # send notification
  docker cp "$container_name:/app/commit_message.txt" /home/ubuntu/onlif-landing-dev/commit_message.txt
  docker cp "$container_name:/app/.env.production.local" /home/ubuntu/onlif-landing-dev/.env.production.local
  bb_commit_message=$(cat /home/ubuntu/onlif-landing-dev/commit_message.txt)
  bb_message_body="오블리브 개발서버가 업데이트되었습니다.(http://3.34.187.252:8082/)
  $bb_commit_message"
  slack_channel_id=$(grep "^SLACK_CHANNEL_ID=" /home/ubuntu/onlif-landing-dev/.env.production.local | cut -d '=' -f2 | tr -d '\r\n')
  bb_message=$(jq -n --arg body "$bb_message_body" --arg channel "$slack_channel_id" '{channel:$channel, text:$body}')
  slack_api_key=$(grep "^SLACK_BOT_TOKEN=" /home/ubuntu/onlif-landing-dev/.env.production.local | cut -d '=' -f2 | tr -d '\r\n')
  curl -d "$bb_message" -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $slack_api_key" https://slack.com/api/chat.postMessage
elif [ "$DEPLOYMENT_GROUP_NAME" == "production" ]; then
  # Copy to prod
  cp -R /home/ubuntu/obliv-landing-tmp/. /home/ubuntu/obliv-landing-prod

  # delete dev config file
  rm -f /home/ubuntu/obliv-landing-prod/nginx/conf.d/nginx-development.conf

  chown -R ubuntu:ubuntu /home/ubuntu/obliv-landing-prod
  cd /home/ubuntu/obliv-landing-prod
  aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 120122301167.dkr.ecr.ap-northeast-2.amazonaws.com/obliv-landing

  docker-compose -f docker-compose-production.yml pull
  docker-compose -f docker-compose-production.yml down
  docker-compose -f docker-compose-production.yml up -d

  # send notification
  docker cp obliv-landing:/app/commit_message.txt /home/ubuntu/obliv-landing-prod/commit_message.txt
  docker cp obliv-landing:/app/.env.production.local /home/ubuntu/obliv-landing-prod/.env.production.local
  bb_commit_message=$(cat /home/ubuntu/obliv-landing-prod/commit_message.txt)
  bb_message_body="오블리브 운영서버가 업데이트되었습니다.(https://obliv.kr/)
  $bb_commit_message"
  slack_channel_id=$(grep "^SLACK_CHANNEL_ID=" /home/ubuntu/obliv-landing-prod/.env.production.local | cut -d '=' -f2 | tr -d '\r\n')
  bb_message=$(jq -n --arg body "$bb_message_body" --arg channel "$slack_channel_id" '{channel:$channel, text:$body}')
  slack_api_key=$(grep "^SLACK_BOT_TOKEN=" /home/ubuntu/obliv-landing-prod/.env.production.local | cut -d '=' -f2 | tr -d '\r\n')
  curl -d "$bb_message" -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $slack_api_key" https://slack.com/api/chat.postMessage
fi
