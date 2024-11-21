import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Slider.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Slider() {
  const dataImage = [
    {
      hrefImage: 'http://st5.cdn.yestone.com/thumbs/10878436/vector/67032/670323226/api_thumb_450.jpg?forcejpeg=true',
      alt: 'Image',
    },
    {
      hrefImage: 'http://st5.cdn.yestone.com/thumbs/1561359/vector/68615/686155878/api_thumb_450.jpg?forcejpeg=true',
      alt: 'Image',
    },
    {
      hrefImage: 'http://st5.cdn.yestone.com/thumbs/59577748/vector/65494/654944410/api_thumb_450.jpg?forcejpeg=true',
      alt: 'Image',
    },
  ];

  const renderItem = (data) => {
    return data.map((item) => (
      <Link href="#" className={cx('item-link')}>
        <Image className={cx('item-img')} alt={item.alt} src={item.hrefImage} />
      </Link>
    ));
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('slider-list')}></div>
    </div>
  );
}

export default Slider;
