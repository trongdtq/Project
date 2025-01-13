import classNames from 'classnames/bind';

import styles from './Messages.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Inbox() {
  return (
    <div className={cx('container')}>
      <div className={cx('buttons')}>
        <Button text className={cx('btn', 'disabled')}>
          Delete
        </Button>
        <Button text className={cx('btn', 'disabled')}>
          Mark as read
        </Button>
        <Button text className={cx('btn', 'disabled')}>
          Mark as unread
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

export default Inbox;
