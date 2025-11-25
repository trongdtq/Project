import * as httpRequest from '~/utils/httpRequest';

const productDetail = async ({ videos, q, lang = 'en', id, image_type, video_type }) => {
  try {
    const key = '47157071-54d0225a2d41b1fcea499adfb';
    const res = await httpRequest.get(`api${videos}/`, {
      params: {
        key,
        q,
        lang,
        id,
        image_type,
        video_type,
      },
    });
    return res.hits;
  } catch (error) {
    console.log(error);
  }
};

export { productDetail };
