import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './AsideUserNav.module.scss';
import config from '~/config';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function AsideUserNav() {
  // Check if there is a value in LocaStorage, if so use it, otherwise default to 'settings'

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('tabs-container')}>
          <NavLink to={config.routes.myMedia} className={({ isActive }) => cx('btn-tab', { active: isActive })}>
            My media
          </NavLink>
          <NavLink to={config.routes.statistics} className={({ isActive }) => cx('btn-tab', { active: isActive })}>
            Statistics
          </NavLink>
          <NavLink to={config.routes.following} className={({ isActive }) => cx('btn-tab', { active: isActive })}>
            Following
          </NavLink>
          <NavLink to={config.routes.messages} className={({ isActive }) => cx('btn-tab', { active: isActive })}>
            Messages
          </NavLink>
          <NavLink to={config.routes.settings} className={({ isActive }) => cx('btn-tab', { active: isActive })}>
            Settings
          </NavLink>
          <NavLink to={config.routes.user} className={cx('btn-tab', 'tab-right')}>
            My Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default memo(AsideUserNav);
