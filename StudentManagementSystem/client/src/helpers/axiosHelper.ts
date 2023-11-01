import {IP, PORT} from '@env';
import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
  retries: 3,
  retryDelay: retryCount => {
    return retryCount * 1000;
  },
  shouldResetTimeout: true,
  retryCondition(error) {
    return true;
    switch (error.response?.status) {
      case 200:
        return false;
      case 404:
        return false;
      case 429:
        return true;
      case 400:
        return true;
      case 404:
        return true;
      default:
        return true;
    }
  },
  onRetry(retryCount, error, requestConfig) {
    console.log('retryCount', retryCount);
    return;
  },
});
const axiosHelper = async ({
  data,
  method,
  path,
  params,
}: {
  data?: object;
  method: 'post' | 'get' | 'put' | 'delete';
  path: string;
  params?: object;
}) => {
  const response = await axios[method](`http://${IP}:${PORT}/${path}`, data, {
    params,
  });

  return response;
};
export default axiosHelper;
