import * as httpRequest from '~/utils/httpRequest';

// API search
export const search = async ({
  videos,
  q,
  lang = 'en',
  image_type,
  video_type,
  safesearch = true,
  page = 1,
  per_page = 40,
  pretty = true,
}) => {
  try {
    const key = process.env.REACT_APP_KEY_API_IMAGES_URL;
    const res = await httpRequest.get(`api${videos}/`, {
      params: {
        key,
        q,
        lang,
        image_type,
        video_type,
        safesearch,
        page,
        per_page,
        pretty,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
