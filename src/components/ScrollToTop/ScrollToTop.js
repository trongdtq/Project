import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

import styles from './ScrollToTop.module.scss';

const cx = classNames.bind(styles);

function ScrollToTop({ scroll }) {
  const scrollRef = useRef();

  useEffect(() => {
    if (scroll) {
      scrollRef.current.classList = cx('scrollToTop', 'show');
    } else {
      scrollRef.current.classList = cx('scrollToTop');
    }
  }, [scroll]);

  return (
    <div ref={scrollRef} className={cx('scrollToTop')}>
      <button
        className={cx('btn-scrollToTop')}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </div>
  );
}

export default ScrollToTop;
