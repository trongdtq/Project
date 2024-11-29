import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Slider.module.scss';
import Image from '~/components/Image';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Slider() {
  const dataImage = [
    {
      hrefImage: 'http://st5.cdn.yestone.com/thumbs/10878436/vector/67032/670323226/api_thumb_450.jpg?forcejpeg=true',
      title: 'Image',
    },
    {
      hrefImage: 'http://st5.cdn.yestone.com/thumbs/1561359/vector/68615/686155878/api_thumb_450.jpg?forcejpeg=true',
      title: 'Image',
    },
    {
      hrefImage: 'http://st5.cdn.yestone.com/thumbs/59577748/vector/65494/654944410/api_thumb_450.jpg?forcejpeg=true',
      title: 'Image',
    },
    {
      hrefImage: 'http://st5.cdn.yestone.com/thumbs/1561359/vector/68615/686155878/api_thumb_450.jpg?forcejpeg=true',
      title: 'Image',
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
    console.log(currentIndex);
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
            ref={(el) => (sliderImages.current[index] = el)}
            key={index}
            to="#"
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
            // className={cx('dot')}
          >
            <Image className={cx('dot-img')} alt={item.title} src={item.hrefImage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
