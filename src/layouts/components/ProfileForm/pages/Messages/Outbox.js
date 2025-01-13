import classNames from 'classnames/bind';

import styles from './Messages.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Outbox() {
  return (
    <div className={cx('container')}>
      <div className={cx('buttons')}>
        <Button text className={cx('btn', 'disabled')}>
          Delete
        </Button>
      </div>

      <table className={cx('messages')}>
        <tbody>
          <tr>
            <td style={{ border: '0', fontSize: '50px', color: '#aaa' }}>----</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Outbox;
