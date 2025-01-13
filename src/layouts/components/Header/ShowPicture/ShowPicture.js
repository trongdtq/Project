import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { Wrapper as PropsWrapper } from '~/components/Popper';
import styles from './ShowPicture.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);

function ShowPicture({ children }) {
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
  ];

  const renderPicture = (props) => (
    <div tabIndex={'-1'} {...props}>
      <PropsWrapper classname={cx('picture-propes')}>
        <div className={cx('wrapper')}>
          <header className={cx('header')}>
            <p>Tons of genuine photos and vectors</p>
          </header>

          <main className={cx('body')}>
            <div className={cx('banner')}>
              {dataImage.map((item, index) => (
                <Link
                  key={index}
                  to={`${config.routes.search}?query=${encodeURIComponent(item.title)}?type=all`}
                  className={cx('img-banner')}
                >
                  <Image src={item.hrefImage} alt={item.title} />
                </Link>
              ))}
            </div>
            <div className={cx('picture-links')}>
              <div className={cx('item')}>
                <p className={cx('title')}>Featured Gallery</p>

                <p className={cx('content')}>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Womens Equality Day')}?type=all`}
                    className={cx('content-link')}
                  >
                    Women's Equality Day
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('The Joy of Reding')}?type=all`}
                    className={cx('content-link')}
                  >
                    The Joy of Reding
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Innocent Images')}?type=all`}
                    className={cx('content-link')}
                  >
                    Innocent Images
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Art Deco')}?type=all`}
                    className={cx('content-link')}
                  >
                    Art Deco
                  </Link>
                </p>
              </div>

              <div className={cx('item')}>
                <p className={cx('title')}>Category Search</p>

                <p className={cx('content')}>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Business')}?type=all`}
                    className={cx('content-link')}
                  >
                    Business
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Landscape')}?type=all`}
                    className={cx('content-link')}
                  >
                    Landscape
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Education')}?type=all`}
                    className={cx('content-link')}
                  >
                    Education
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Food')}?type=all`}
                    className={cx('content-link')}
                  >
                    Food
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Fashion')}?type=all`}
                    className={cx('content-link')}
                  >
                    Fashion
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Sports')}?type=all`}
                    className={cx('content-link')}
                  >
                    Sports
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Health')}?type=all`}
                    className={cx('content-link')}
                  >
                    Health
                  </Link>
                  <font style={{ verticalAlign: 'inherit' }}> / </font>
                  <Link
                    to={`${config.routes.search}?query=${encodeURIComponent('Text Background')}?type=all`}
                    className={cx('content-link')}
                  >
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

  // console.log(renderPicture);

  return (
    // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context
    <div>
      <Tippy
        hideOnClick={false}
        interactive
        delay={[200, 400]}
        offset={[0, 5]}
        placement="bottom-end"
        render={renderPicture}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default ShowPicture;
