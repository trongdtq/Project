import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faComments, faPen } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './UserLayout.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import config from '~/config';
import { IconMedia } from '~/components/Icons';

const cx = classNames.bind(styles);

function UserLayout() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('head-profile')}>
        <div className={cx('avatar-profile')}>
          <Image src={'zxcvj'} className={cx('img-avatar')} />
        </div>

        <div className={cx('info-profile')}>
          <div className={cx('user-name')}>
            <p>u_lbmgxxdtkc</p>
          </div>

          <div className={cx('info-follow')}>
            <p className={cx('follwers')}>0 Followers</p>
            <p className={cx('follwing')}>0 Following</p>
          </div>
        </div>
        {/* style hover buttons */}
        <Tippy hideOnClick={false} content="Message" placement="bottom">
          <div className={cx('message')}>
            <Button to={config.routes.messages} className={cx('btn')}>
              <FontAwesomeIcon icon={faComments} />
            </Button>
          </div>
        </Tippy>

        <Tippy hideOnClick={false} content="Edit Profile" placement="bottom">
          <div className={cx('edit')}>
            <Button to={config.routes.settings} className={cx('btn')}>
              <FontAwesomeIcon icon={faPen} />
            </Button>
          </div>
        </Tippy>
      </div>

      <div className={cx('user-media')}>
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

export default UserLayout;
