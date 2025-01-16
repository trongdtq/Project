import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('footer')}>
        <div className={cx('content')}>
          <div className={cx('row')}>
            <div className={cx('item', 'col', 'c-4')}>
              <div className={cx('logo')}>
                <Image className={cx('logo-img')} src={images.longlogo} />
              </div>
              <p className={cx('title')}>Provider of genuine pictures, fonts, and music materials</p>
            </div>

            <div className={cx('item', 'col', 'c-3')}>
              <p className={cx('title')}>Contact Us</p>
              <p className={cx('text')}>Buy</p>
              <p className={cx('text')}>177-2124-9737</p>
              <p className={cx('text')}>hi@FeLi.com</p>
              <p className={cx('text')}>Report Email</p>
              <p className={cx('text')}>hi@FeLi.com</p>
              <p className={cx('text')}>Franchise promotion</p>
            </div>

            <div className={cx('item', 'col', 'c-3')}>
              <p className={cx('title')}>about Us</p>
              <p className={cx('text')}>
                <Link href="/" className={cx('text')}>
                  about Us
                </Link>
              </p>
              <p className={cx('text')}>
                <Link href="/" className={cx('text')}>
                  Business license
                </Link>
              </p>
              <p className={cx('text')}>
                <Link href="/" className={cx('text')}>
                  Picture Price
                </Link>
              </p>
              <p className={cx('text')}>
                <Link href="/" className={cx('text')}>
                  License Agreement
                </Link>
              </p>
              <p className={cx('text')}>
                <Link href="/" className={cx('text')}>
                  Website Terms of Service
                </Link>
              </p>
              <p className={cx('text')}>
                <Link href="/" className={cx('text')}>
                  Recently Updated
                </Link>
              </p>
            </div>

            <div className={cx('item', 'col', 'c-2')}>
              <p className={cx('title')}>Frequently asked questions</p>
              <p className={cx('text')}>
                <Link href="/" className={cx('text')}>
                  Image FAQ
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className={cx('copyright')}>
          <Link className={cx('text')} to="/">
            FeLi.com
          </Link>
          <span> ABC Company ABC Vietnam Network Technology ©2013-2024 All rights reserved </span>
          <Link className={cx('text')} to="#">
            ICP VietNam
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
