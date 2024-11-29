import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
const defaultFnc = () => {};

function Menu({ children, items = [], onChange = defaultFnc }) {
  const renderItem = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} onClick={onChange(item)} />);
  };

  const renderMenu = (props) => (
    <div className={cx('menu-list')} tabIndex={'-1'} {...props}>
      <PopperWrapper classname={cx('menu-popper')}>
        <div className={cx('menu-content')}>{renderItem()}</div>
      </PopperWrapper>
    </div>
  );

  return (
    <div>
      <Tippy interactive offset={[-80, 15]} placement="bottom" render={renderMenu}>
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
