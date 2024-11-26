import classNames from 'classnames/bind';

import styles from './Advantage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Advantage() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('item')}>
        <i className={cx('icon')}>
          <FontAwesomeIcon icon={faFile} />
        </i>

        <h4 className={cx('title')}>Genuine commercial authorization</h4>
        <p className={cx('description')}>The product is authorized by the original author and is 100% genuine.</p>
        <p className={cx('description')}>Guaranteed payment</p>
      </div>

      <div className={cx('item')}>
        <i className={cx('icon')}>
          <FontAwesomeIcon icon={faFile} />
        </i>

        <h4 className={cx('title')}>Provide authorization letter and invoice</h4>
        <p className={cx('description')}>The copyright authorization form can be downloaded online</p>
        <p className={cx('description')}>Provide VAT invoice</p>
      </div>

      <div className={cx('item')}>
        <i className={cx('icon')}>
          <FontAwesomeIcon icon={faFile} />
        </i>

        <h4 className={cx('title')}>Low price</h4>
        <p className={cx('description')}>Easily cope with strict budgets</p>
        <p className={cx('description')}>The lowest price for a painting is $2.50</p>
      </div>

      <div className={cx('item')}>
        <i className={cx('icon')}>
          <FontAwesomeIcon icon={faFile} />
        </i>

        <h4 className={cx('title')}>Flexible payment</h4>
        <p className={cx('description')}>Online and offline payments are credited instantly and downloaded instantly</p>
        <p className={cx('description')}>Support business customers to use first and pay later</p>
      </div>
    </div>
  );
}

export default Advantage;
