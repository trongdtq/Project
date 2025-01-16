import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './LoginForm.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import config from '~/config';
import ValidatorForm from '~/components/ValidatorForm';

const cx = classNames.bind(styles);

function LoginForm() {
  const formRef = useRef(null);
  const [isShowPassword, setIsShowPassword] = useState(false);

  useEffect(() => {
    ValidatorForm(
      formRef.current,
      {
        onSubmit: async function (data) {
          window.location.href = '/';
          console.log(data);
        },
      },
      styles,
    );
  }, []);

  const handleShowHidePassword = () => {
    setIsShowPassword(!isShowPassword);
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
              id="email"
              className={cx('form-control')}
              placeholder=" "
              name="email"
              rules="required|email"
              autoComplete="username"
              type="email"
            />
            <label htmlFor="email" className={cx('form-label')}>
              Email
            </label>
            <span className={cx('formMessage')}></span>
          </div>

          <div className={cx('formGroup')}>
            <input
              id="password"
              className={cx('form-control')}
              placeholder=" "
              name="password"
              rules="required|min:6"
              autoComplete="new-password"
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
        </div>

        <div className={cx('forgot-password')}>
          <Link to="/">Forgot Password?</Link>
        </div>

        <div className={cx('submit')}>
          <Button square className={cx('form-submit')}>
            Login
          </Button>
        </div>

        <div className={cx('signup')}>
          <span>
            Don't have an account{' '}
            <Link to={config.routes.signUp} className={cx('signup-link')}>
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
