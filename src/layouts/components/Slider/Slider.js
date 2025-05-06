import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Slider.module.scss';
import Image from '~/components/Image';
import config from '~/config';

const cx = classNames.bind(styles);

function Slider() {
  const dataImage = [
    {
      hrefImage: 'https://cdn-media.sforum.vn/storage/app/media/ctv_seo10/background-tet-1.jpg',
      title: 'Happy New Year 2025',
    },
    {
      hrefImage:
        'https://img3.wallspic.com/previews/0/9/4/0/7/170490/170490-snow_landscape_free-snow-landscape-nature-winter-x750.jpg',
      title: 'Winter Color Trends 2024',
    },
    {
      hrefImage:
        'https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2017/10/26015647/dich-vu-thiet-ke-banner-du-lich-chuyen-nghiep-tai-ha-noi4.jpg',
      title: 'Image Of Tourism Industry',
    },
    {
      hrefImage: 'https://ssg.vn/wp-content/uploads/2023/07/edu-banner-1.jpg.webp',
      title: 'Image Of Education Sector',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  // Access The Images
  const sliderImages = useRef([]);
  const dots = useRef([]);

  const goToNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= dataImage.length ? 0 : prevIndex + 1));
  }, [dataImage.length]);

  const goToPrev = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? dataImage.length - 1 : prevIndex - 1));
  }, [dataImage.length]);

  // Handles animations when changing photos
  useLayoutEffect(() => {
    sliderImages.current = sliderImages.current.slice(0, dataImage.length);
    if (sliderImages.current[currentIndex]) {
      if (direction === 'prev') {
        sliderImages.current[
          currentIndex + 1 >= dataImage.length ? 0 : currentIndex + 1
        ].style.animation = `${styles.prev1} .5s ease-in forwards`;

        sliderImages.current[currentIndex].style.animation = `${styles.prev2} .5s ease-in forwards`;
      } else {
        sliderImages.current[
          currentIndex - 1 < 0 ? dataImage.length - 1 : currentIndex - 1
        ].style.animation = `${styles.next1} .5s ease-in forwards`;

        sliderImages.current[currentIndex].style.animation = `${styles.next2} .5s ease-in forwards`;
      }
    }
  }, [dataImage.length, currentIndex, direction]);

  useEffect(() => {
    const intervalId = setInterval(() => goToNext(), 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex, goToNext]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('slider-list')}>
        {dataImage.map((item, index) => (
          <Link
            rel="preload"
            ref={(el) => (sliderImages.current[index] = el)}
            key={index}
            to={`${config.routes.search}?query=${encodeURIComponent(item.title)}?type=all`}
            className={cx('item-link', { active: index === currentIndex })}
          >
            <Image className={cx('item-img')} alt={item.title} src={item.hrefImage} />
          </Link>
        ))}
      </div>

      <button className={cx('prev-btn')} onClick={goToPrev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={cx('next-btn')} onClick={goToNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <div className={cx('slider-dots')}>
        {dataImage.map((item, index) => (
          <div
            key={index}
            attr={index}
            ref={(el) => (dots.current[index] = el)}
            className={cx('dot', { active: index === currentIndex })}
          >
            <Image className={cx('dot-img')} alt={item.title} src={item.hrefImage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
