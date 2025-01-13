import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Statistics.module.scss';
import Button from '~/components/Button';

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
                    <svg width="193" height="89" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#media_discs_svg__filter0_d_7226_59487)" transform="rotate(15 152.192 46)">
                        <circle cx="152.192" cy="46" r="32" fill="#fff"></circle>
                        <circle cx="152.192" cy="46" r="31.5" stroke="#EBECF0"></circle>
                      </g>
                      <path
                        d="M163.46 37.998l-12.449-1.453a1.583 1.583 0 00-1.732 1.163l-2.953 11.02a4.767 4.767 0 00-2.219-.734c-2.232-.156-4.134 1.194-4.251 3.046-.117 1.852 1.581 3.47 3.813 3.626 1.999.14 3.731-.93 4.144-2.47l2.953-11.02 11.004 1.274-2.011 7.506a4.766 4.766 0 00-2.22-.734c-2.232-.157-4.133 1.194-4.25 3.046-.117 1.852 1.581 3.47 3.813 3.626 1.999.14 3.731-.93 4.144-2.47l3.598-13.428a1.599 1.599 0 00-1.384-1.998z"
                        fill="#67A871"
                      ></path>
                      <g filter="url(#media_discs_svg__filter1_d_7226_59487)">
                        <circle cx="96.191" cy="38" r="32" fill="#fff"></circle>
                        <circle cx="96.191" cy="38" r="31.5" stroke="#EBECF0"></circle>
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M89.73 28.308h12.923a3.231 3.231 0 013.231 3.23v12.924a3.231 3.231 0 01-3.231 3.23H89.73a3.23 3.23 0 01-3.231-3.23V31.538a3.23 3.23 0 013.23-3.23zm13.384 9.771v-6.54a.461.461 0 00-.461-.462H89.73a.462.462 0 00-.462.461v12.924c0 .254.207.461.462.461h.079l9.422-9.422a.923.923 0 011.305 0l2.578 2.578zm-12.461-3.31a2.308 2.308 0 104.615 0 2.308 2.308 0 00-4.615 0z"
                        fill="#E3AB6C"
                      ></path>
                      <g filter="url(#media_discs_svg__filter2_d_7226_59487)" transform="rotate(-15 40.192 46)">
                        <circle cx="40.192" cy="46" r="32" fill="#fff"></circle>
                        <circle cx="40.192" cy="46" r="31.5" stroke="#EBECF0"></circle>
                      </g>
                      <path
                        d="M44.186 43.073l3.907-4.746a.923.923 0 011.604.348l2.389 8.916a.923.923 0 01-1.216 1.103l-5.756-2.156.73 2.726a2.77 2.77 0 01-1.958 3.391l-9.808 2.628a2.77 2.77 0 01-3.391-1.958l-2.39-8.916a2.77 2.77 0 011.959-3.392l9.808-2.628a2.77 2.77 0 013.391 1.958l.73 2.726z"
                        fill="#909CF2"
                      ></path>
                      <defs>
                        <filter
                          id="media_discs_svg__filter0_d_7226_59487"
                          x="112.184"
                          y="7.992"
                          width="80.017"
                          height="80.016"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="2"></feOffset>
                          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                          <feColorMatrix values="0 0 0 0 0.0980392 0 0 0 0 0.105882 0 0 0 0 0.14902 0 0 0 0.06 0"></feColorMatrix>
                          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7226_59487"></feBlend>
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_7226_59487" result="shape"></feBlend>
                        </filter>
                        <filter
                          id="media_discs_svg__filter1_d_7226_59487"
                          x="56.191"
                          y="0"
                          width="80"
                          height="80"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="2"></feOffset>
                          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                          <feColorMatrix values="0 0 0 0 0.0980392 0 0 0 0 0.105882 0 0 0 0 0.14902 0 0 0 0.06 0"></feColorMatrix>
                          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7226_59487"></feBlend>
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_7226_59487" result="shape"></feBlend>
                        </filter>
                        <filter
                          id="media_discs_svg__filter2_d_7226_59487"
                          x="0.184"
                          y="7.992"
                          width="80.017"
                          height="80.016"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="2"></feOffset>
                          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                          <feColorMatrix values="0 0 0 0 0.0980392 0 0 0 0 0.105882 0 0 0 0 0.14902 0 0 0 0.06 0"></feColorMatrix>
                          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7226_59487"></feBlend>
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_7226_59487" result="shape"></feBlend>
                        </filter>
                      </defs>
                    </svg>
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
