import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './SignUpForm.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import config from '~/config';
import Validator from './Validator';

const cx = classNames.bind(styles);

function SignUpForm() {
  const formRef = useRef(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordConfirma, setIsShowPasswordConfirma] = useState(false);

  useEffect(() => {
    Validator(formRef.current, {
      onSubmit: function (date) {
        console.log('date', date);
      },
    });
  }, []);

  const handleShowHidePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleShowHidePasswordConfirma = () => {
    setIsShowPasswordConfirma(!isShowPasswordConfirma);
  };

  return (
    <div className={cx('wrapper')} style={{ backgroundImage: ` url(${images.backgroundform})` }}>
      <form action="" ref={formRef} id="form" className={cx('container')}>
        <div className={cx('title')}>
          <span>Sign Up</span>
        </div>

        <div className={cx('input-wrapper')}>
          <div className={cx('formGroup')}>
            <input
              id="fullName"
              className={cx('form-control')}
              placeholder=" "
              name="fullName"
              autocomplete="username"
              rules="required"
              type="text"
            />
            <label htmlFor="fullName" className={cx('form-label')}>
              User name
            </label>
            <span className={cx('formMessage')}></span>
          </div>

          <div className={cx('formGroup')}>
            <input
              id="password"
              className={cx('form-control')}
              placeholder=" "
              name="password"
              autocomplete="new-password"
              rules="required|min:6"
              type={isShowPassword ? 'text' : 'password'}
            />
            <label htmlFor="password" className={cx('form-label')}>
              PassWord
            </label>
            <span className={cx('custom-input-password')} onClick={handleShowHidePassword}>
              {isShowPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
            </span>
            <span className={cx('formMessage')}></span>
          </div>

          <div className={cx('formGroup')}>
            <input
              id="password-confirmation"
              className={cx('form-control')}
              name="password-confirmation"
              placeholder=" "
              autocomplete="new-password"
              rules="required|isConfirmed:password"
              type={isShowPasswordConfirma ? 'text' : 'password'}
            />
            <label htmlFor="password_confirmation" className={cx('form-label')}>
              Confirm password
            </label>
            <span className={cx('custom-input-password')} onClick={handleShowHidePasswordConfirma}>
              {isShowPasswordConfirma ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
            </span>
            <span className={cx('formMessage')}></span>
          </div>

          <div className={cx('formGroup')}>
            <input
              id="email"
              className={cx('form-control')}
              placeholder=" "
              name="email"
              rules="required|email"
              type="email"
            />
            <label htmlFor="email" className={cx('form-label')}>
              Email
            </label>
            <span className={cx('formMessage')}></span>
          </div>
        </div>

        <div className={cx('submit')}>
          <Button square className={cx('form-submit')}>
            Login
          </Button>
        </div>

        <div className={cx('signup')}>
          <span>
            Don't have an account{' '}
            <Link to={config.routes.login} className={cx('signup-link')}>
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
