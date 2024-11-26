import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import styles from './Poster.module.scss';

const cx = classNames.bind(styles);

function Poster() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('poster')}>
        <div className={cx('item')} style={{ width: 50 + '%', height: 560 }}>
          <Link href="#" className={cx('item-link')}>
            <Image
              className={cx('img')}
              alt={'poster'}
              src={
                'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474096VmK/hinh-anh-nghe-thuat_052710918.jpeg'
              }
            />
            <p className={cx('caption')}>Visual Inspiration</p>
          </Link>
        </div>

        <div className={cx('item')} style={{ height: 280 }}>
          <Link href="#" className={cx('item-link')}>
            <Image
              className={cx('img')}
              alt={'poster'}
              src={
                'https://png.pngtree.com/thumb_back/fh260/background/20230424/pngtree-woman-in-an-oriental-robe-is-walking-down-an-alley-image_2499596.jpg'
              }
            />
            <p className={cx('caption')}>Oriental Character</p>
          </Link>
        </div>

        <div className={cx('item')} style={{ height: 280 }}>
          <Link href="#" className={cx('item-link')}>
            <Image
              className={cx('img')}
              alt={'poster'}
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJ_Mr1PGQe9I5539NJoS4UA4x_2tejtOq3_JjbLXsIt1KlAeExwlWtqdxJ06jKYygkqs&usqp=CAU'
              }
            />
            <p className={cx('caption')}>Image Coupon</p>
          </Link>
        </div>

        <div className={cx('item')} style={{ width: 50 + '%', height: 280 }}>
          <Link href="#" className={cx('item-link')}>
            <Image
              className={cx('img')}
              alt={'poster'}
              src={
                'https://i1-dulich.vnecdn.net/2022/07/29/2-4316-1626493707-7761-1652265-1928-3977-1659063820.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=7VkRb2rQNzEY9yBlGpejhg'
              }
            />
            <p className={cx('caption')}>Tourism Industry Gallery</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Poster;
