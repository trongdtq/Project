import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './RelatedSection.module.scss';
import * as searchSevice from '~/services/searchService';
import RenderRelatedMedia from './RenderRelatedMedia';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function RelatedSection({ valueRelated, type }) {
  const [relateResult, setRelateResult] = useState([]);
  const [tags, setTags] = useState([]);
  const [moreRelate, setMoreRelate] = useState(1);
  const [disabledMore, setDisabledMore] = useState('');
  const [typeVideo, setTypeVideo] = useState('');

  const location = useLocation();
  const rsRelate = new URLSearchParams(location.search).get('id');

  useEffect(() => {
    setRelateResult([]);
    setDisabledMore('');
    setMoreRelate(1);
  }, [rsRelate]);

  useEffect(() => {
    let imageType;
    let videosType = '';

    if (type === 'film' || type === 'animation') {
      videosType = 'videos';
      setTypeVideo('videos');
    }

    const fetchApi = async () => {
      const relatedMedia = await searchSevice.search({
        videos: videosType,
        image_type: imageType,
        page: moreRelate,
        q: valueRelated,
        per_page: 15,
        video_type: type,
      });
      moreRelate === 1 ? setRelateResult(relatedMedia.hits) : setRelateResult([...relateResult, ...relatedMedia.hits]);
    };

    fetchApi();
    setTags([]);
  }, [valueRelated, moreRelate]);

  useEffect(() => {
    if (!!relateResult) {
      for (var i = 0; i < 3; i++) {
        if (!relateResult[i]) return;
        setTags((tags[i] = relateResult[i].tags));
      }
    }

    // Cut strings into elements in the array and flatten
    let arrayTags = tags.map((item) => item.split(', ')).flat();
    // Remove duplicate elements in the array
    let tagNoDuplicates = arrayTags.filter((value, index, self) => self.indexOf(value) === index);
    setTags(tagNoDuplicates);
  }, [relateResult]);

  const handleMore = () => {
    setMoreRelate(2);
    setDisabledMore(styles.disabled);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <div className={cx('header-tags')}>
            {tags.map((item, index) => (
              <Button
                key={index}
                to={`${config.routes.search}?query=${encodeURIComponent(`${item}`)}?type=${type}|${typeVideo}`}
                className={cx('tag-item')}
                outline
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div className={cx('content')}>
          <h2 className={cx('title-section')}>Related images</h2>
          <div className={cx('related-section')}>
            <RenderRelatedMedia data={relateResult} />
          </div>
          <div className={cx('section-more', disabledMore)}>
            <div className={cx('pagination-simple')}>
              <Button outline className={cx('pagination-btn')} onClick={handleMore}>
                Load more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedSection;
