import classNames from 'classnames/bind';

import styles from './Following.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { useState } from 'react';
import { IconMedia } from '~/components/Icons';

const cx = classNames.bind(styles);

function Following() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const [active, setActive] = useState('true');

  const handleFollowing = (e) => {
    e.currentTarget.classList.add(cx('active'));
    setActive(true);
  };

  const handleFollowers = (e) => {
    e.currentTarget.classList.add(cx('active'));
    setActive(false);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header-bar')}>
        <Button text className={cx('btn-bar', { active: active })} onClick={handleFollowing}>
          Following<span className={cx('count')}>0</span>
        </Button>
        <Button text className={cx('btn-bar', { active: !active })} onClick={handleFollowers}>
          Followers<span className={cx('count')}>0</span>
        </Button>
      </div>

      {active ? (
        <div className={cx('container-inner')} style={{ backgroundImage: `url(${images.backgroundNoMedia})` }}>
          <div className={cx('title')}>
            <p>You're not following anyone</p>
          </div>

          <div className={cx('icon')}>
            <IconMedia />
          </div>

          <div className={cx('text')}>
            <p>Get started by following awesome creators</p>
          </div>

          <div className={cx('upload')}>
            <Button className={cx('btn-upload')} primary leftIcon={<FontAwesomeIcon icon={faSearch} />}>
              Find creators
            </Button>
          </div>
        </div>
      ) : (
        <div className={cx('container-inner')} style={{ backgroundImage: `url(${images.backgroundNoMedia})` }}>
          <div className={cx('title')}>
            <p>You have no followers</p>
          </div>

          <div className={cx('icon')}>
            <IconMedia />
          </div>

          <div className={cx('text')}>
            <p>Gain followers by uploading media</p>
          </div>

          <div className={cx('upload')}>
            <Button className={cx('btn-upload')} primary leftIcon={<FontAwesomeIcon icon={faArrowUpFromBracket} />}>
              Upload
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Following;
