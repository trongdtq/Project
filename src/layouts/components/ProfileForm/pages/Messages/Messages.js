import classNames from 'classnames/bind';

import styles from './Messages.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Inbox from './Inbox';
import { useState } from 'react';
import Outbox from './Outbox';

const cx = classNames.bind(styles);

function Messages() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const [isInbox, setIsInbox] = useState(true);

  const handleInbox = (e) => {
    setIsInbox(true);
  };

  const handleOutbox = (e) => {
    setIsInbox(false);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('menu-messages')}>
        <Button text className={cx('btn', { active: isInbox })} onClick={handleInbox}>
          Inbox
        </Button>

        <Button text className={cx('btn', { active: !isInbox })} onClick={handleOutbox}>
          Outbox
        </Button>

        <form className={cx('search-messages')} action="?">
          <input type="text" placeholder="Search" className={cx('input-style')} />
          <Button text className={cx('btn-submit')}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </form>
      </div>

      <div className={cx('messages-container')}>{isInbox ? <Inbox /> : <Outbox />}</div>
    </div>
  );
}

export default Messages;
