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
    const key = '47157071-54d0225a2d41b1fcea499adfb';
    const res = await httpRequest.get(`api/${videos}/`, {
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
