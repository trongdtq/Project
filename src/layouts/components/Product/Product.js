import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faShareNodes, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faCircleDown, faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid, faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';

import styles from './Product.module.scss';
import { productDetail } from '~/services/UserServices';
import Image from '~/components/Image';
import Button from '~/components/Button';
import config from '~/config';
import RelatedSection from './RelatedSection';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

function Product() {
  const [product, setProduct] = useState([]);
  const [typeImage, setTypeImage] = useState(true);
  const [activeLike, setActiveLike] = useState(false);
  const [activeSave, setActiveSave] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // get query parameters from URL
  const idProduct = new URLSearchParams(location.search).get('id');
  let query = idProduct.split('?');
  query = query[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let imageType;
    let typeQuery;
    let videosType = '';
    if (idProduct) {
      const querySeparation = idProduct.split('?');

      imageType = querySeparation[1].split('=');
      imageType = imageType[1];

      if (querySeparation[1].includes('|')) {
        videosType = querySeparation[1].split('|');

        videosType = videosType[1];

        imageType = '';
        typeQuery = videosType[0].split('=');
        typeQuery = typeQuery[1];
      }
    }
    const fechApi = async () => {
      const data = await productDetail({
        videos: videosType,
        id: query,
        image_type: imageType,
        video_type: typeQuery,
      });
      setProduct(data[0]);
    };

    fechApi();
  }, [idProduct, query]);

  useEffect(() => {
    if (product.type === 'film' || product.type === 'animation') {
      setTypeImage(false);
    }
  }, [product]);

  // Limit related search characters
  const limitedTags = product.tags ? product.tags.split(',').slice(0, 10).join(', ').substring(0, 100) : '';

  const handleDownload = () => {
    // Check if it's an image or video
    const url = product.largeImageURL || product.videos?.large?.url;
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = url.split('/').pop();
        link.click();
      })
      .catch((error) => {
        console.error('Error while downloading:', error);
      });
  };

  const handleLikes = () => {
    setActiveLike(!activeLike);
  };

  const handleSave = () => {
    setActiveSave(!activeSave);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [product]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('detail-wrap')}>
          <div className={cx('detail-content')}>
            <div className={cx('detail-img')}>
              {loading ? (
                <Loading />
              ) : (
                <>
                  {typeImage ? (
                    <Image className={cx('img')} src={product.largeImageURL} />
                  ) : (
                    <video key={product.videos?.large?.url} className={cx('img')} controls>
                      <source src={product.videos.large.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </>
              )}
              <p className={cx('title-img')}>{`Images on the topic ${product.tags}.`}</p>
            </div>
            <RelatedSection valueRelated={limitedTags} type={product.type} />
          </div>

          <div className={cx('detail-outer')}>
            <div className={cx('inner-outer')}>
              <div className={cx('head-outer')}>
                <div className={cx('license')}>
                  <i className={cx('icon-license')}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </i>
                  <p>
                    Free to use under the <a className={cx('link-license')}>Content License</a> FeLiImage
                  </p>
                </div>

                <div className={cx('buttons')}>
                  <div className={cx('subscribe')}>
                    <Button to={config.routes.charge} className={cx('btn-subscribe')}>
                      Premium
                    </Button>
                  </div>

                  <div className={cx('downLoad')}>
                    <Button
                      className={cx('btn-downLoad')}
                      primary
                      rightIcon={<FontAwesomeIcon icon={faCircleDown} />}
                      onClick={handleDownload}
                    >
                      DownLoad
                    </Button>
                  </div>
                </div>
              </div>

              <div className={cx('middle-outer')}>
                <div className={cx('tools-trigger')}>
                  <div className={cx('tool-item')}>
                    <Button
                      className={cx('btn-tool', { active: activeLike })}
                      outline
                      leftIcon={<FontAwesomeIcon icon={activeLike ? faHeartSolid : faHeart} />}
                      onClick={handleLikes}
                    >
                      {`${product.likes}`}
                    </Button>
                  </div>

                  <div className={cx('tool-item')}>
                    <Button
                      className={cx('btn-tool', { active: activeSave })}
                      outline
                      leftIcon={<FontAwesomeIcon icon={activeSave ? faBookmarkSolid : faBookmark} />}
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                  </div>

                  <div className={cx('tool-item')}>
                    <Button outline className={cx('btn-tool-notext')}>
                      <FontAwesomeIcon icon={faMessage} />
                    </Button>
                  </div>
                  {/* Complete nodes of image details */}
                  <div className={cx('tool-item')}>
                    <Button outline className={cx('btn-tool-notext')}>
                      <FontAwesomeIcon icon={faShareNodes} />
                    </Button>
                  </div>
                </div>

                <div className={cx('expanding-section')}>
                  <div className={cx('section-item')}>
                    <span className={cx('row-label')}>Views</span>
                    <span>{product.views}</span>
                  </div>
                  <div className={cx('section-item')}>
                    <span className={cx('row-label')}>Downloads</span>
                    <span>{product.downloads}</span>
                  </div>
                  <div className={cx('section-item')}>
                    <span className={cx('row-label')}>Likes</span>
                    <span>{product.likes}</span>
                  </div>
                  <div className={cx('section-item')}>
                    <span className={cx('row-label')}>Saves</span>
                    <span>{product.collections}</span>
                  </div>
                  <div className={cx('section-item')}>
                    <span className={cx('row-label')}>Media type</span>
                    <span>{product.type}</span>
                  </div>
                </div>
              </div>

              <div className={cx('footer-outer')}>
                <div className={cx('footer-account')}>
                  <div className={cx('avatar-account')}>
                    <a href="/">
                      <Image className={cx('img-avatar')} src={product.userImageURL} />
                    </a>
                  </div>

                  <div className={cx('usernameFollowers-container')}>
                    <a href="/" className={cx('username')}>
                      {product.user}
                    </a>
                    <span className={cx('followers')}>{`${product.comments} followers`}</span>
                  </div>

                  <div className={cx('button-followers')}>
                    <Button className={cx('btn-fl')} leftIcon={<FontAwesomeIcon icon={faUserPlus} />}>
                      Followers
                    </Button>
                  </div>
                </div>

                <div className={cx('footer-donate')}>
                  <Button to="/" outline className={cx('btn-donate')}>
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
