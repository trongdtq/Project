import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { Wrapper as PropsWrapper } from '~/components/Popper';
import styles from './ShowPicture.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function ShowPicture({ children }) {
  const renderPicture = (props) => (
    <div tabIndex={'-1'} {...props}>
      <PropsWrapper classname={cx('picture-propes')}>
        <div className={cx('wrapper')}>
          <header className={cx('header')}>
            <p>Tons of genuine photos and vectors</p>
          </header>

          <main className={cx('body')}>
            <div className={cx('banner')}>
              <Link href="#" className={cx('img-banner')}>
                <Image
                  src={
                    'http://st5.cdn.yestone.com/thumbs/10878436/vector/67032/670323226/api_thumb_450.jpg?forcejpeg=true'
                  }
                  alt={'winter-trends-2024'}
                />
              </Link>
              <Link href="#" className={cx('img-banner')}>
                <Image
                  src={
                    'http://st5.cdn.yestone.com/thumbs/10878436/vector/67032/670323226/api_thumb_450.jpg?forcejpeg=true'
                  }
                  alt={'winter-trends-2024'}
                />
              </Link>
              <Link href="#" className={cx('img-banner')}>
                <Image
                  src={
                    'http://st5.cdn.yestone.com/thumbs/10878436/vector/67032/670323226/api_thumb_450.jpg?forcejpeg=true'
                  }
                  alt={'winter-trends-2024'}
                />
              </Link>
            </div>
            <div className={cx('picture-links')}>
              <div className={cx('item')}>
                <p className={cx('title')}>Featured Gallery</p>

                <p className={cx('content')}>
                  <Link href="#" className={cx('content-link')}>
                    Women's Equality Day
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link href="#" className={cx('content-link')}>
                    The Joy of Reding
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link href="#" className={cx('content-link')}>
                    Innocent Images
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link href="#" className={cx('content-link')}>
                    Art Deco
                  </Link>
                </p>
              </div>

              <div className={cx('item')}>
                <p className={cx('title')}>Category Search</p>

                <p className={cx('content')}>
                  <Link href="#" className={cx('content-link')}>
                    Business
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link href="#" className={cx('content-link')}>
                    Landscape
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link href="#" className={cx('content-link')}>
                    Education
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link href="#" className={cx('content-link')}>
                    Food
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link href="#" className={cx('content-link')}>
                    Fashion
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link href="#" className={cx('content-link')}>
                    Sports
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link href="#" className={cx('content-link')}>
                    Health
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link href="#" className={cx('content-link')}>
                    Text Background
                  </Link>
                </p>
              </div>
            </div>
          </main>
        </div>
      </PropsWrapper>
    </div>
  );

  console.log(renderPicture);

  return (
    <Tippy interactive delay={[200, 400]} offset={[0, 5]} placement="bottom-end" render={renderPicture}>
      {children}
    </Tippy>
  );
}

export default ShowPicture;
