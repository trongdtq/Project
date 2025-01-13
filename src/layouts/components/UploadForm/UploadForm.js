import classNames from 'classnames/bind';

import styles from './Upload.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpFromBracket,
  faChartColumn,
  faClipboardCheck,
  faFireFlameCurved,
  faFlag,
  faMusic,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faImage } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import { useEffect, useState } from 'react';
import config from '~/config';

const cx = classNames.bind(styles);

function UploadForm() {
  const TAGS_IMAGES = [
    'podcast',
    'interview',
    'feedback',
    'christmas wreath',
    'confetti',
    'new york',
    'leadership',
    'cookies',
    'yoga',
  ];

  const TAGS_VIDEOS = [
    'krishna',
    'rich',
    'alone',
    'lunar eclipse',
    'teaching',
    'heavy rain',
    'makeup',
    'kangaroo',
    'wake up',
    'intro',
  ];

  const [TypeImage, setTypeImage] = useState('images');
  const [tags, setTags] = useState(TAGS_IMAGES);

  var type = '';

  if (TypeImage === 'videos') {
    type = TypeImage;
  } else {
    type = '';
  }

  const handleTypeImages = () => {
    setTypeImage('images');
    setTags(TAGS_IMAGES);
  };

  const handleTypeVideos = () => {
    setTypeImage('videos');
    setTags(TAGS_VIDEOS);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('upload-container')}>
        <div className={cx('heading')}>
          <p>Upload your media</p>
        </div>
        <div className={cx('sub-heading')}>
          <p>Join our community of creators and showcase your talent by uploading your media!</p>
          <p>
            Learn more about the FeLi{' '}
            <a href="/" className={cx('sub-heading-link')}>
              Content license.
            </a>
          </p>
        </div>

        <div className={cx('upload-media')}>
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

          <div className={cx('button-upload')}>
            <Button className={cx('btn')} primary leftIcon={<FontAwesomeIcon icon={faArrowUpFromBracket} />}>
              Browse files
            </Button>
          </div>

          <div className={cx('info-selection')}>
            <p>
              60 uploads remaining this week{' '}
              <Tippy
                hideOnClick={false}
                content="FeLi limits weekly uploads, so that all submissions can be properly reviewed by our team. The limit is determined by the quality of your work. The higher the quality, the more you're able to upload."
                placement="bottom"
              >
                <i className={cx('icon-info')}>
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </i>
              </Tippy>
            </p>
          </div>
        </div>

        <div className={cx('guide-upload')}>
          <div className={cx('item-guide')}>
            <i className={cx('icon-item')}>
              <FontAwesomeIcon icon={faImage} />
            </i>
            <span className={cx('text-item')}>
              JPG, PNG, PSD, AI, and SVG images up to 40MB with at least 3000px on one side
            </span>
          </div>

          <div className={cx('item-guide')}>
            <i className={cx('icon-item')}>
              <FontAwesomeIcon icon={faVideo} />
            </i>
            <span className={cx('text-item')}>MPEG, MOV, and AVI videos up to 300MB and larger than 1920x800px</span>
          </div>

          <div className={cx('item-guide')}>
            <i className={cx('icon-item')}>
              <FontAwesomeIcon icon={faMusic} />
            </i>
            <span className={cx('text-item')}>MP3, WAV, AAC,FLAC, AIF and M4A up to 100MB and &lt; 15 minutes</span>
          </div>

          <div className={cx('item-guide')}>
            <i className={cx('icon-item')}>
              <FontAwesomeIcon icon={faFireFlameCurved} />
            </i>
            <span className={cx('text-item')}>
              GIFs up to 25MB with at least 64px along one side and &lt; 20 seconds
            </span>
          </div>

          <div className={cx('item-guide')}>
            <i className={cx('icon-item')}>
              <FontAwesomeIcon icon={faFlag} />
            </i>
            <span className={cx('text-item')}>Excludes graphic nudity, violence or hate</span>
          </div>

          <div className={cx('item-guide')}>
            <i className={cx('icon-item')}>
              <FontAwesomeIcon icon={faClipboardCheck} />
            </i>
            <span className={cx('text-item')}>Only upload original media that you own the rights to</span>
          </div>
        </div>

        <hr />

        <div className={cx('high-demand')}>
          <div className={cx('title-demand')}>
            <i className={cx('icon-title')}>
              <FontAwesomeIcon icon={faChartColumn} />
            </i>

            <p>Tags in high demand</p>
            <Tippy
              hideOnClick={false}
              content={'Popular searches for which we do not have enough media'}
              placement="bottom"
            >
              <i className={cx('icon-question')}>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </i>
            </Tippy>
          </div>

          <div className={cx('media-types')}>
            <Button className={cx('btn-type', { active: TypeImage === 'images' })} text onClick={handleTypeImages}>
              Images
            </Button>

            <Button className={cx('btn-type', { active: TypeImage === 'videos' })} text onClick={handleTypeVideos}>
              Videos
            </Button>
          </div>

          <div className={cx('tags')}>
            {tags.map((item, index) => (
              <Button
                key={index}
                to={`${config.routes.search}?query=${encodeURIComponent(item)}?type=all|${type}`}
                className={cx('btn-tag')}
                outline
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div className={cx('footer')}>
          <div className={cx('help-text')}>
            <p>
              Need help? <span className={cx('text-decs')}>Check out our</span>
            </p>
          </div>
          <Button to="/" outline className={cx('btn-help')}>
            Submission guidelines
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UploadForm;
