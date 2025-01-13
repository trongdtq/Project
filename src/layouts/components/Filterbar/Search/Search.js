import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import config from '~/config';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [typeMedia, setTypeMedia] = useState('Photo');
  const [nameMedia, setNameMedia] = useState('Photo');
  const [activeIndex, setActiveIndex] = useState(null);

  // focus Input when clear
  const inputRef = useRef();

  const TYPES_MEDIA = [
    {
      title: 'Photo',
      type: 'photo',
    },
    {
      title: 'Illustration',
      type: 'illustration',
    },
    {
      title: 'Vector',
      type: 'vector',
    },
    {
      title: 'All Videos',
      type: 'all|videos',
    },
    {
      title: 'Film',
      type: 'Film|videos',
    },
    {
      title: 'Animation',
      type: 'animation|videos',
    },
  ];

  const renderItem = () => {
    return TYPES_MEDIA.map((item, index) => (
      <div key={index} className={cx('item')}>
        <button
          // ref={(e) => (mediaRefs.current[index] = e)}
          className={cx('btn-item', { active: activeIndex === index })}
          onClick={(e) => handleTypeMedia(e, item, index)}
        >
          {item.title}
        </button>
      </div>
    ));
  };

  const renderMenu = (props) => (
    <div className={cx('menu-list')} tabIndex={'-1'} {...props}>
      <PopperWrapper classname={cx('menu-popper')}>
        <div className={cx('menu-content')}>{renderItem()}</div>
      </PopperWrapper>
    </div>
  );

  const handleTypeMedia = (e, data, index) => {
    setActiveIndex(index);
    e.target.classList.add(styles.active);
    setTypeMedia(data.type);
    setNameMedia(data.title);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value.trimStart());
  };

  const handleKeyDown = (e) => {
    e.target.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        return submit(e);
      }
    });
  };

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const submit = (e) => {
    e.preventDefault();
    if (!searchValue) {
      return;
    }

    const searchQuery = searchValue; // data to be transmitted
    window.location.href = `${config.routes.search}?query=${encodeURIComponent(searchQuery)}?type=${encodeURIComponent(
      typeMedia,
    )}`;
  };

  return (
    <div className={cx('search')}>
      <div className={cx('selection-media')}>
        <Tippy hideOnClick={false} interactive placement="bottom" offset={[0, 14]} render={renderMenu}>
          <button className={cx('btn-selection')}>
            <p className={cx('selection-title')}>{nameMedia}</p>
            <i className={cx('selection-icon')}>
              <FontAwesomeIcon icon={faChevronDown} />
            </i>
          </button>
        </Tippy>
      </div>

      <input
        ref={inputRef}
        value={searchValue}
        spellCheck={false}
        placeholder="Enter the search keyword Combination, for example: women's hair"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {searchValue && (
        <button className={cx('clear-btn')} onClick={handleClear}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      )}

      <button className={cx('search-btn')} onClick={submit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default Search;
