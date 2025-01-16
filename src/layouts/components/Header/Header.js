import classNames from 'classnames/bind';
import { faArrowUpFromBracket, faDollarSign, faGear, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
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
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

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
      icon: <FontAwesomeIcon icon={faArrowUpFromBracket} />,
      title: 'Upload',
      to: '/upload',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Account Settings',
      to: '/profile/settings',
    },
    {
      icon: <FontAwesomeIcon icon={faRightToBracket} />,
      title: 'Logout',
      to: '',
      separate: true,
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

          {/* <Button text className={cx('cart')} to={config.routes.shoppingcart}>
            Cart
          </Button> */}

          {currentUser ? (
            <Menu items={MENU_ITEMS}>
              <div className={cx('user-avatar')}>
                <Image
                  src="https://cdn.pixabay.com/photo/2024/03/05/17/53/ai-generated-8614982_1280.jpg"
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
