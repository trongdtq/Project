import axios from 'axios';

console.log(process.env);

const httpRequest = axios.create({
  baseURL: 'https://pixabay.com/',
});
export const get = async (api, options = {}) => {
  const response = await httpRequest.get(api, options);
  return response.data;
};

export default httpRequest;
