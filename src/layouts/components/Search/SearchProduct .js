import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchProduct.module.scss';
import * as searchSevices from '~/services/searchService';
import RenderSearchResult from './RenderSearchResult';
import Button from '~/components/Button';
import config from '~/config';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

function SearchProduct() {
  const [searchResult, setSearchResult] = useState([]);
  const [indexPage, setIndexPage] = useState(1);
  const [isDisabledPrev, setIsDisabledPrev] = useState(true);
  const [isDisabledNext, setIsDisabledNext] = useState(false);
  const [tags, setTags] = useState([]);
  const [typeVideo, setTypeVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  // get query parameters from URL
  const getQuery = new URLSearchParams(location.search).get('query');
  let query = getQuery.split('?');
  query = query[0];

  useEffect(() => {
    setIndexPage(1);
    setIsDisabledPrev(true);
  }, [getQuery]);
  useEffect(() => {
    let imageType;
    let typeQuery;
    let videosType = '';
    if (getQuery) {
      const querySeparation = getQuery.split('?');
      imageType = querySeparation[1].split('=');
      imageType = imageType[1];
      setTypeVideo([imageType, '']);

      if (querySeparation[1].includes('|')) {
        videosType = querySeparation[1].split('|');
        typeQuery = videosType[0].split('=');
        typeQuery = typeQuery[1];
        videosType = videosType[1];

        setTypeVideo([typeQuery, videosType]);
        imageType = '';
      }
    }

    const fetchApi = async () => {
      const result = await searchSevices.search({
        videos: videosType,
        image_type: imageType,
        page: indexPage,
        q: query,
        video_type: typeQuery,
      });
      setSearchResult(result);
    };
    fetchApi();
    setTags([]);
  }, [getQuery, indexPage]);

  useEffect(() => {
    if (!!searchResult.totalHits) {
      for (var i = 0; i < 4; i++) {
        if (i === searchResult.total) break;
        setTags((tags[i] = searchResult.hits[i].tags));
      }
    }

    // Cut strings into elements in the array and flatten
    let arrayTags = tags.map((item) => item.split(', ')).flat();
    // Remove duplicate elements in the array
    let tagNoDuplicates = arrayTags.filter((value, index, self) => self.indexOf(value) === index);

    setTags(tagNoDuplicates);
  }, [searchResult]);

  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (indexPage === 1) return;
    setIndexPage(indexPage - 1);
    if (indexPage === 2) return setIsDisabledPrev(true);
    setIsDisabledNext(false);
  };

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let maxPage = Math.ceil(searchResult.total / 40);

    if (maxPage > 10) maxPage = 10;
    if (indexPage === maxPage - 1) setIsDisabledNext(true);
    if (indexPage === maxPage) return;

    setIndexPage(indexPage + 1);
    setIsDisabledPrev(false);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, [location]);

  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={cx('header')}>
              <h2 className={cx('title')}>{`${typeVideo[0]} ${typeVideo[1]} ${query} (${searchResult.total})`}</h2>
              <div className={cx('tags')}>
                {tags.map((item, index) => (
                  <Button
                    key={index}
                    to={`${config.routes.search}?query=${encodeURIComponent(`${item}`)}?type=${typeVideo[0]}|${
                      typeVideo[1]
                    }`}
                    className={cx('tag-item')}
                    outline
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            <div className={cx('content')}>
              {searchResult.total === 0 ? (
                <div className={cx('noresult')}>
                  <span className={cx('rs-text')}>/(ㄒoㄒ)/~~</span>
                  <p className={cx('desc')}>
                    You can try any of the following methods to search again: 1: try changing English keywords; 2 reduce
                    filtration conditions; 3 synonym keyword changes; 4 reduce the number of keywords.
                  </p>
                </div>
              ) : (
                <>
                  <RenderSearchResult
                    data={searchResult}
                    className={cx('item-result')}
                    classNameMainCard={cx('item-result_img')}
                  />
                  <div className={cx('more')}>
                    <div className={cx('pagination-simple')}>
                      <button disabled={isDisabledPrev} className={cx('pagination-btn')} onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </button>
                      <span className={cx('pagination-number')}>{indexPage}</span>
                      <button disabled={isDisabledNext} className={cx('pagination-btn')} onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchProduct;
