import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Guide.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Guide() {
  const data = [
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
    {
      hrefImage:
        'https://media.istockphoto.com/id/828433166/photo/beautiful-women-having-fun-in-the-street.jpg?s=612x612&w=0&k=20&c=1dig9HOHgW4JSV-u5x9drqeBLF54pTI8FW6HfTIQwHQ=',
      desc: 'Womens Equality Day',
    },
  ];

  return (
    <div className={cx('wrapper')}>
      <div className={cx('guide')}>
        <h3 className={cx('title')}>- Image selection -</h3>
        <p className={cx('description')}>
          Hand-selected hundreds of selected collections to help you efficiently inject inspiration and creativity into
          your projects
        </p>

        <div className={cx('category')}>
          <Button href="#" square className={cx('category-item')}>
            Latest Recommendations
          </Button>

          <Button href="#" square className={cx('category-item')}>
            Oriental Characters
          </Button>

          <Button href="#" square className={cx('category-item')}>
            Popular Topics
          </Button>

          <Button href="#" square className={cx('category-item')}>
            Illustration
          </Button>

          <Button href="#" square className={cx('category-item')}>
            Design Elements
          </Button>

          <Button href="#" square className={cx('category-item')}>
            Visual Inspiration
          </Button>

          <Button href="#" square className={cx('category-item')}>
            More
          </Button>
        </div>

        <div className={cx('galleries')}>
          <div className={cx('row')}>
            {data.map((item, index) => (
              <div key={index} className={cx('col')}>
                <div className={cx('galleries-item')}>
                  <Link className={cx('item-link')}>
                    <Image className={cx('item-img')} src={item.hrefImage} />
                    <span className={cx('item-icon')}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <p className={cx('item-desc')}>{item.desc}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
