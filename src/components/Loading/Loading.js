import classNames from 'classnames/bind';

import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

function Loading() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('loading_container')}>
        <div className={cx('loading', 'set_1')}></div>
        <div className={cx('loading', 'set_2')}></div>
        <div className={cx('loading', 'set_3')}></div>
      </div>
    </div>
  );
}

export default Loading;
