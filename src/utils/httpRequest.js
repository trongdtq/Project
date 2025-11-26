import axios from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_API_IMAGES_URL,
});
export const get = async (api, options = {}) => {
  const response = await httpRequest.get(api, options);
  return response.data;
};

export default httpRequest;
