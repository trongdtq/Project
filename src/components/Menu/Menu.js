import Tippy from '@tippyjs/react/headless';

function Menu({ children }) {
  const renderMenu = () => {};

  return (
    <div>
      <Tippy visible interactive placement="bottom" render={renderMenu}>
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
