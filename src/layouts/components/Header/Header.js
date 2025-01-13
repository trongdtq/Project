import classNames from 'classnames/bind';
import {
  faArrowUpFromBracket,
  faBell,
  faClockRotateLeft,
  faDollarSign,
  faGear,
  faLandmark,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import ShowPicture from './ShowPicture';
import Image from '~/components/Image';
import Menu from '~/components/Menu';
import { faAddressCard, faCreditCard, faStar } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faAddressCard} />,
      title: 'My Account ',
      to: '/user',
    },
    {
      icon: <FontAwesomeIcon icon={faStar} />,
      title: 'Images Collection',
      to: '/collection',
    },
    {
      icon: <FontAwesomeIcon icon={faArrowUpFromBracket} />,
      title: 'Upload',
      to: '/upload',
    },
    {
      icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
      title: 'Purchase History',
      to: '/request',
    },
    {
      icon: <FontAwesomeIcon icon={faLandmark} />,
      title: 'Business Functions',
      to: '/logout',
      separate: true, // hiển thị vạch
    },
    {
      icon: <FontAwesomeIcon icon={faBell} />,
      title: 'Notification Center',
      to: '/notify',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Account Settings',
      to: '/profile/settings',
    },
    {
      icon: <FontAwesomeIcon icon={faRightToBracket} />,
      title: 'Logout',
      to: '/',
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img className={cx('logoFeli')} src={images.longlogo} alt="LogoFeli" />
        </Link>

        <ShowPicture>
          <span className={cx('menu-picture')}>Picture</span>
        </ShowPicture>

        <div className={cx('actions')}>
          <Button text to={config.routes.charge} className={cx('price')}>
            <span style={{ marginLeft: -8 }}>
              <FontAwesomeIcon icon={faDollarSign} />
            </span>
            Price
          </Button>

          <Tippy hideOnClick={false} content="For visual customer service, please add account!!!" placement="bottom">
            <span className={cx('customer-service')}>Online customer service</span>
          </Tippy>

          <Button text className={cx('cart')} to={config.routes.shoppingcart}>
            Cart
          </Button>

          {/* Menu */}
          {currentUser ? (
            <Menu items={MENU_ITEMS}>
              <div className={cx('user-avatar')}>
                <Image
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c9b27b91966166745b39845b8424fb26~c5_100x100.jpeg?lk3s=a5d48078&nonce=50556&refresh_token=0cb4f6f3d0286bbb2efd80439dd78f63&x-expires=1731416400&x-signature=8Muv7HY0A0SG4jmA1hSiaXte44U%3D&shp=a5d48078&shcp=81f88b70"
                  fallback={images.noImae}
                  className={cx('img-avatar')}
                  alt="user name"
                />
              </div>
            </Menu>
          ) : (
            <Button to={config.routes.login} text className={cx('login-btn')}>
              Login/Register
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
