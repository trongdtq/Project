import classNames from 'classnames/bind';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
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

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img className={cx('logoFeli')} src={images.longlogo} alt="LogoFeli" />
        </Link>

        {/* Picture */}
        <ShowPicture>
          <span className={cx('menu-picture')}>picture</span>
        </ShowPicture>

        {/* Actions */}
        <div className={cx('actions')}>
          <Button
            text
            to={config.routes.charge}
            leftIcon={<FontAwesomeIcon icon={faDollarSign} />}
            className={cx('price')}
          >
            price
          </Button>

          <Tippy content="For visual customer service, please add account!!!" placement="bottom">
            <span className={cx('customer-service')}>online customer service</span>
          </Tippy>

          {/* shopping cart */}
          <Button text className={cx('cart')} to={config.routes.shoppingcart}>
            Cart
          </Button>

          {currentUser ? (
            <div className={cx('user-avatar')}>
              <Image
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c9b27b91966166745b39845b8424fb26~c5_100x100.jpeg?lk3s=a5d48078&nonce=50556&refresh_token=0cb4f6f3d0286bbb2efd80439dd78f63&x-expires=1731416400&x-signature=8Muv7HY0A0SG4jmA1hSiaXte44U%3D&shp=a5d48078&shcp=81f88b70"
                className={cx('img-avatar')}
                alt="user name"
              />
            </div>
          ) : (
            <>
              {/* Login use Link tab*/}
              <Button text className={cx('login')}>
                Login/Register
              </Button>

              {/* Menu , avatar */}
            </>
          )}

          {/* <Menu></Menu> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
