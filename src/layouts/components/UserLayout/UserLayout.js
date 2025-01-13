import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket, faComments, faPen } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './UserLayout.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

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
            <Button className={cx('btn')}>
              <FontAwesomeIcon icon={faComments} />
            </Button>
          </div>
        </Tippy>

        <Tippy hideOnClick={false} content="Edit Profile" placement="bottom">
          <div className={cx('edit')}>
            <Button className={cx('btn')}>
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

        <div className={cx('text-media')}>
          <p>Get started by uploading your media!</p>
        </div>

        <div className={cx('upload-media')}>
          <Button className={cx('btn-upload')} primary leftIcon={<FontAwesomeIcon icon={faArrowUpFromBracket} />}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
