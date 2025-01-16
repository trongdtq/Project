import classNames from 'classnames/bind';

import styles from './MyMedia.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faSliders } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import config from '~/config';
import { IconMedia } from '~/components/Icons';

const cx = classNames.bind(styles);

function MyMedia() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header-bar')}>
        <Button text disable className={cx('btn-bar')} leftIcon={<FontAwesomeIcon icon={faSliders} />}>
          Filters
        </Button>
        <Button href="/profile/mymedia" text className={cx('btn-bar', 'active')}>
          Uploaded<span className={cx('media-count')}>0</span>
        </Button>
        <Button text disable className={cx('btn-bar')}>
          Declined<span className={cx('media-count')}>0</span>
        </Button>
      </div>

      <div className={cx('media-container')} style={{ backgroundImage: `url(${images.backgroundNoMedia})` }}>
        <div className={cx('title-media')}>
          <p>Nothing to see here</p>
        </div>

        <div className={cx('icon-media')}>
          <IconMedia />
        </div>

        <div className={cx('text-media')}>
          <p>Get started by uploading your media!</p>
        </div>

        <div className={cx('upload-media')}>
          <Button
            to={config.routes.upload}
            className={cx('btn-upload')}
            primary
            leftIcon={<FontAwesomeIcon icon={faArrowUpFromBracket} />}
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MyMedia;
