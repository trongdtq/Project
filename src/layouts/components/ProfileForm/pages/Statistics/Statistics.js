import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Statistics.module.scss';
import Button from '~/components/Button';
import { IconMedia } from '~/components/Icons';

const cx = classNames.bind(styles);

function Statistics() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('upper-content')}>
        <div className={cx('item')}>
          <p className={cx('title')}>Views</p>
          <span className={cx('data')}>0</span>
        </div>

        <div className={cx('item')}>
          <p className={cx('title')}>Plays</p>
          <span className={cx('data')}>0</span>
        </div>

        <div className={cx('item')}>
          <p className={cx('title')}>Downloads</p>
          <span className={cx('data')}>0</span>
        </div>

        <div className={cx('item')}>
          <p className={cx('title')}>Likes</p>
          <span className={cx('data')}>0</span>
        </div>

        <div className={cx('item')}>
          <p className={cx('title')}>Comments</p>
          <span className={cx('data')}>0</span>
        </div>
      </div>

      <div className={cx('body-content')}>
        <div className={cx('header')}>
          <h1 className={cx('heading')}>More statistics</h1>
        </div>

        <div className={cx('statistical')}>
          <div className={cx('container')}>
            <div className={cx('container-inner')}>
              <div className={cx('title-container')}>
                <p className={cx('title-text')}>Recently uploaded</p>

                <Tippy
                  hideOnClick={false}
                  content="Your top 10 most popular media, uploaded within the last time period"
                  placement="top"
                >
                  <div className={cx('trigger-wrapper')}>
                    <i className={cx('icon-question')}>
                      <FontAwesomeIcon icon={faCircleQuestion} />
                    </i>
                  </div>
                </Tippy>

                <p className={cx('date-range')}>All time</p>
              </div>

              <div className={cx('heading-container')}>
                <div className={cx('column-heading')}>MEDIA</div>
                <div className={cx('column-heading')}>DOWNLOADS</div>
                <div className={cx('column-heading')}>VIEWS</div>
              </div>

              <hr />

              <div className={cx('content-container')}></div>

              <div className={cx('no-data')}>
                <p className={cx('heading-no-data')}>No recently uploaded media</p>
                <p className={cx('sub-heading-no-data')}>You have not uploaded any new media.</p>
              </div>
            </div>
          </div>

          <div className={cx('container')}>
            <div className={cx('container-inner')}>
              <div className={cx('title-container')}>
                <p className={cx('title-text')}>Most used tags</p>

                <Tippy
                  hideOnClick={false}
                  content="Your most used tags, based on your total uploads within the time frame recently"
                  placement="top"
                >
                  <div className={cx('trigger-wrapper')}>
                    <i className={cx('icon-question')}>
                      <FontAwesomeIcon icon={faCircleQuestion} />
                    </i>
                  </div>
                </Tippy>

                <p className={cx('date-range')}>All time</p>
              </div>

              <div className={cx('heading-container')}>
                <div className={cx('column-heading')}>Tag</div>
                <div className={cx('column-heading')}>Count</div>
              </div>

              <hr />

              <div className={cx('content-container')}></div>

              <div className={cx('no-data')}>
                <p className={cx('heading-no-data')}>No recently used tags</p>
                <p className={cx('sub-heading-no-data')}>You have no new tags.</p>
              </div>
            </div>
          </div>

          <div className={cx('container', 'container-myMedia')}>
            <div className={cx('container-inner')}>
              <div className={cx('title-container')}>
                <p className={cx('title-text')}>My media</p>
                <p className={cx('date-range')}>All time</p>
              </div>

              <hr />

              <div className={cx('content-container')}></div>

              <div className={cx('no-data')}>
                <div className={cx('myMedia')}>
                  <div className={cx('title-myMedia')}>
                    <p>Nothing to see here</p>
                  </div>

                  <div className={cx('icon-myMedia')}>
                    <IconMedia />
                  </div>

                  <div className={cx('text-myMedia')}>
                    <p>Get started by uploading your media!</p>
                  </div>

                  <div className={cx('upload-myMedia')}>
                    <Button
                      className={cx('btn-upload')}
                      primary
                      leftIcon={<FontAwesomeIcon icon={faArrowUpFromBracket} />}
                    >
                      Upload
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
