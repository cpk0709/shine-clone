import type { AxiosRequestConfig } from 'axios';
import axios, { isAxiosError } from 'axios';

import { logger } from '@/utils/logger';

export type ApiDescription = {
  url: string;
  method: 'get' | 'post';
  authRequired: boolean;
};

export type ApiResponse<T = unknown> = {
  code: number;
  message: string;
  result: T;
};

export interface MetaConfig {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  page: number;
  pageCount: number;
  take: number;
}

export type BestApiResponse<T = unknown> = {
  code: number;
  message: string;
  result: {
    meta: MetaConfig;
    data: T[];
  };
};

export type DtoMyInfo = {
  firstName: string;
  lastName?: string;
  loginId: string;
  role: string;
  email: string;
  avatar: string;
  phone: string;
  agreeAdvertising: boolean;
  agreeEmail: boolean;
  agreeSms: boolean;
};

export type DtoUpdateMyinfo = Partial<DtoMyInfo> | { password?: string };

export const toErrorMessage = (error: unknown): string => {
  if (isAxiosError(error)) {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      return `${error.response.status} - ${error.message}`;
    } else if (error.message) {
      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      return `${error.message}`;
    }
  }

  return '알수 없는 오류';
};

export const post = async <T>(
  url: string,
  payload: unknown,
  headers?: AxiosRequestConfig['headers'],
) => {
  try {
    const postResult = await axios.post<T>(url, payload, { headers });
    logger.debug('postResult.data', postResult.data);

    return postResult.data;
  } catch (error: unknown) {
    logger.error(error);

    // throw axios.isAxiosError(error) ? new Error(error.message) : error;
    throw error;
  }
};

export const get = async <T>(
  url: string,
  paramter: unknown,
  headers?: AxiosRequestConfig['headers'],
) => {
  try {
    const getResult = await axios.get<T>(url, { params: paramter, headers });
    logger.debug('getResult.data', getResult.data);

    return getResult.data;
  } catch (error: unknown) {
    logger.error(error);

    // throw axios.isAxiosError(error) ? new Error(error.message) : error;
    throw error;
  }
};

export const bestApiRequest = async <T>(
  api: ApiDescription,
  payload?: unknown,
) => {
  const getToken = await axios.post(
    `${process.env.NEXT_PUBLIC_BEST_API_URL}/auth/apiToken`,
    { apiKey: process.env.NEXT_PUBLIC_MSO_API_TOKEN },
  );
  const accToken = getToken.data.result.accessToken;
  const headers = {
    Authorization: `Bearer ${accToken}`,
  };

  return api.method === 'post'
    ? post<BestApiResponse<T>>(api.url, payload, headers)
    : get<BestApiResponse<T>>(api.url, payload, headers);
};
