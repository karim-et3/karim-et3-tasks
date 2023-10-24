import {IP, PORT} from '@env';
import axios from 'axios';

const axiosHelper = async ({
  data,
  method,
  path,
  params,
}: {
  data?: object;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  path: string;
  params?: object;
}) => {
  const options = {
    method,
    data,
    url: `http://${IP}:${PORT}/${path}`,
    params,
  };
  const response = axios.request(options);
  return response;
};
export default axiosHelper;
