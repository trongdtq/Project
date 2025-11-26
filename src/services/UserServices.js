import * as httpRequest from '~/utils/httpRequest';

const productDetail = async ({ videos, q, lang = 'en', id, image_type, video_type }) => {
  try {
    const key = process.env.REACT_APP_KEY_API_IMAGES_URL;
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
