import classNames from 'classnames/bind';

import styles from './Upload.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartColumn,
  faClipboardCheck,
  faFireFlameCurved,
  faFlag,
  faMusic,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faImage } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import config from '~/config';
import { IconMedia } from '~/components/Icons';

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
            <IconMedia />
          </div>

          <div className={cx('button-upload')}>
            <Button className={cx('btn')} primary>
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
