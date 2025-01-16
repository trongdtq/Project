import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Settings.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import ProfileSettings from './ProfileSettings';
import AccountSettings from './AccountSettings';

const cx = classNames.bind(styles);

function Settings() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const [active, setActive] = useState('Profile');
  const [isProfile, setIsProfile] = useState(true);

  const handleProfile = () => {
    setActive('Profile');
    setIsProfile(true);
  };

  const handleAccount = () => {
    setActive('Account');
    setIsProfile(false);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('nav-settings')}>
          <div className={cx('user-profile')}>
            <div className={cx('avatar-profile')}>
              <Image
                className={cx('img-avatar')}
                src="https://cdn.pixabay.com/photo/2024/03/05/17/53/ai-generated-8614982_1280.jpg"
              />
            </div>

            <div className={cx('username-profile')}>
              <p>u_lbmgxxdtkc</p>
            </div>
          </div>

          <div className={cx('menu-profile')}>
            <Button className={cx('btn-menu', { active: active === 'Profile' })} onClick={handleProfile}>
              Profile settings
            </Button>
            <Button className={cx('btn-menu', { active: active === 'Account' })} onClick={handleAccount}>
              Account settings
            </Button>
          </div>
        </div>

        <div className={cx('content')}>{isProfile ? <ProfileSettings /> : <AccountSettings />}</div>
      </div>
    </div>
  );
}

export default Settings;
