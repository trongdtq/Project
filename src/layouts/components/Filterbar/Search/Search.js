import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');

  // focus Input when clear
  const inputRef = useRef();

  const handleChange = (e) => {
    setSearchValue(e.target.value.trimStart());
  };

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  // temp
  const submit = (e) => {
    e.preventDefault();
    if (!searchValue) {
      return;
    }

    return (window.location.href = config.routes.search);
  };

  return (
    <div className={cx('search')}>
      <input
        ref={inputRef}
        value={searchValue}
        spellCheck={false}
        placeholder="Enter the search keyword Combination, for example: women's hair"
        onChange={handleChange}
      />

      {/* Clear btn */}
      {searchValue && (
        <button className={cx('clear-btn')} onClick={handleClear}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      )}

      {/* Search btn */}
      <button className={cx('search-btn')} onClick={submit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default Search;
