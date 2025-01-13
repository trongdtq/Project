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
    // đang xủ lý ở đây  const res = await httpRequest.get(`api/${videos}/`, { call dc API but chưa render đc
    const key = '47157071-54d0225a2d41b1fcea499adfb';
    // const url = `https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo&pretty=true`;
    // https://pixabay.com/api/videos/?key=47157071-54d0225a2d41b1fcea499adfb&q=yellow+flowers
    // https://pixabay.com/api/videos/?key=47157071-54d0225a2d41b1fcea499adfb&q=yellow+flowers&pretty=truevideo_type=animation
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
    // return res.hits;
    return res;
  } catch (error) {
    console.log(error);
  }
};
