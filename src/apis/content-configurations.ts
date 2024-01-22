/* eslint-disable import/no-named-as-default-member */
import axios from 'axios';

import type { ApiDescription, BestApiResponse } from '@/apis/request';
import { bestApiRequest } from '@/apis/request';
import { logger } from '@/utils/logger';

export const getAllContent = async <T>(category: string) => {
  try {
    const brand = 'obliv';
    const apiDescription: ApiDescription = {
      url: `${process.env.NEXT_PUBLIC_CONTENT_CONFIGURATIONS_API}`,
      method: 'get',
      authRequired: true,
    };
    const response = await bestApiRequest<T>(apiDescription, {
      brand,
      category,
      page: 1,
      take: 50,
      order: 'DESC',
    });

    if (response.code === 200) {
      const totalPage = response.result.meta.pageCount;
      const allContentList = response.result.data;
      const allContentResponse: Array<Promise<BestApiResponse<T>>> = [];

      for (let i = 2; i <= totalPage; i++) {
        allContentResponse.push(
          bestApiRequest<T>(apiDescription, {
            brand,
            category,
            page: i,
            take: 50,
            order: 'DESC',
          }),
        );
      }

      await axios.all(allContentResponse).then(
        axios.spread((...res) => {
          for (const data of res) {
            allContentList.push(...data.result.data);
          }
        }),
      );

      return allContentList;
    }

    logger.log(response.message);
  } catch (error) {
    logger.debug('getAllContentList Error::', error);
  }
};
