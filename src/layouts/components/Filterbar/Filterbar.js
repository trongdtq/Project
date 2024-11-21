import classNames from 'classnames/bind';

import styles from './Filterbar.module.scss';
import Search from './Search';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Filterbar() {
  return (
    <div className={cx('wrapper')}>
      {/* Search */}
      <Search />

      <div className={cx('pop-tags')}>
        <Button className={cx('pop-item')} square>
          Oriental characters
        </Button>
        <Button className={cx('pop-item')} square>
          illustration
        </Button>
        <Button className={cx('pop-item')} square>
          Visual inspiration
        </Button>
      </div>
    </div>
  );
}

export default Filterbar;
