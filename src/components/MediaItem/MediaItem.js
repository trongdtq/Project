import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import styles from './MediaItem.module.scss';
import Image from '../Image';
import config from '~/config';

const cx = classNames.bind(styles);

function MediaItem({ data, className }) {
  const [typeImage, setTypeImage] = useState(true);

  const videoRef = useRef();

  useEffect(() => {
    if (data.type === 'film' || data.type === 'animation') {
      setTypeImage(false);
    }
  }, [data]);

  // Handle hover to change video muted properties
  const handleMouseOver = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            videoRef.current.play();
          })
          .catch((error) => {
            console.error('Auto-play prevented:', error);
          });
      }
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  };

  return typeImage ? (
    <div className={cx(styles.item, className)}>
      <Link to={`${config.routes.productDetail}?id=${encodeURIComponent(data.id)}?type=${data.type}`}>
        <Image className={cx('item-img')} src={data.largeImageURL} />
      </Link>
    </div>
  ) : (
    <div className={cx(styles.item, className)}>
      <Link to={`${config.routes.productDetail}?id=${encodeURIComponent(data.id)}?type=${data.type}|videos`}>
        <video
          ref={videoRef}
          muted
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className={cx('item-img')}
        >
          <source src={data.videos.large.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Link>
    </div>
  );
}

export default MediaItem;
