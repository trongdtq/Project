import classNames from 'classnames/bind';

import styles from './Filterbar.module.scss';
import Search from './Search';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function Filterbar() {
  return (
    <div className={cx('wrapper')}>
      <Search />

      <div className={cx('pop-tags')}>
        <Button
          to={`${config.routes.search}?query=${encodeURIComponent('Oriental characters')}?type=all`}
          className={cx('pop-item')}
          square
        >
          Oriental characters
        </Button>
        <Button to={`${config.routes.search}?query=${encodeURIComponent('illustration')}?type=all`} 
          className={cx('pop-item')} 
          square
        >
          illustration
        </Button>
        <Button
          to={`${config.routes.search}?query=${encodeURIComponent('Visual inspiration')}?type=all`}
          className={cx('pop-item')}
          square
        >
          Visual inspiration
        </Button>
      </div>
    </div>
  );
}

export default Filterbar;
