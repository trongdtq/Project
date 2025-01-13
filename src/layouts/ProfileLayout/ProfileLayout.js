import classNames from 'classnames/bind';

import styles from './ProfileLayout.module.scss';
import Header from '../components/Header';
import AsideUserNav from '../components/ProfileForm/components/AsideUserNav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function ProfileLayout() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Header />
        <AsideUserNav />
        <div className={cx('content')}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProfileLayout;
