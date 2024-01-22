if [ -d /home/ubuntu/obliv-landing-tmp ]; then
    rm -rf /home/ubuntu/obliv-landing-tmp
fi

if [ "$DEPLOYMENT_GROUP_NAME" == "code-deploy-group-onlif-landing-dev" ]; then
  if [ -d /home/ubuntu/onlif-landing-dev ]; then
      rm -rf /home/ubuntu/onlif-landing-dev
  fi

  mkdir -vp /home/ubuntu/onlif-landing-dev
elif [ "$DEPLOYMENT_GROUP_NAME" == "production" ]; then
  if [ -d /home/ubuntu/obliv-landing-prod ]; then
      rm -rf /home/ubuntu/obliv-landing-prod
  fi

  mkdir -vp /home/ubuntu/obliv-landing-prod
fi

docker system prune --all --force