import classNames from 'classnames/bind';

import styles from './Settings.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconFacebook } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountSettings() {
  const handleSwitch = (e) => {
    e.currentTarget.classList.toggle(cx('active'));
  };

  const handleSignIn = (e) => {
    e.currentTarget.classList.toggle(cx('active'));
  };

  return (
    <div className={cx('account-settings')}>
      <div className={cx('content-account')}>
        <div className={cx('container-table')}>
          <div className={cx('title')}>
            <h3>Notifications you receive on your account</h3>
          </div>
          <div className={cx('table')}>
            <div className={cx('base-container')}>
              <div className={cx('stripe-container')} style={{ borderLeft: '4px solid rgb(0, 123, 255)' }}>
                <div className={cx('description')}>
                  <div className={cx('description-icon')}>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1chiq5g-facebook"
                      className={cx('icon-brands')}
                      focusable="false"
                      ariaHidden="true"
                      viewBox="0 0 30 30"
                      dataTestid="FacebookCircle.svgIcon"
                    >
                      <path
                        d="M15,3C8.37256,3,3,8.37256,3,15c0,5.9895,4.38818,10.95398,10.125,11.85413,.61096,.09589,1.23706,.14587,1.875,.14587s1.26404-.04999,1.875-.14587c5.73682-.90015,10.125-5.86462,10.125-11.85413,0-6.62744-5.37256-12-12-12Z"
                        fill="#1877f2"
                      ></path>
                      <path
                        d="M19.67109,18.46875l.53203-3.46875h-3.32812v-2.251c0-.949,.46488-1.874,1.95556-1.874h1.51319v-2.95312s-1.37326-.23438-2.68619-.23438c-2.74103,0-4.53256,1.66125-4.53256,4.66875v2.64375h-3.04688v3.46875h3.04688v8.38542c.61095,.09587,1.23713,.14583,1.875,.14583s1.26405-.04997,1.875-.14583v-8.38542h2.79609Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </div>
                  <p className={cx('desc-text')}>
                    Send notifications via Facebook account when I receive a private message
                  </p>
                </div>

                <div className={cx('switch')}>
                  <button className={cx('btn-switch')} onClick={handleSwitch} type="button">
                    <span className={cx('slide')}>
                      <span className={cx('dot')}></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className={cx('base-container')}>
              <div className={cx('stripe-container')} style={{ borderLeft: '4px solid rgb(218, 57, 40)' }}>
                <div className={cx('description')}>
                  <div className={cx('description-icon')}>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1fmmx61-instagram"
                      className={cx('icon-brands')}
                      focusable="false"
                      ariaHidden="true"
                      viewBox="0 0 32 32"
                      dataTestid="Instagram.svgIcon"
                    >
                      <path
                        fill="rgb(218, 57, 40)"
                        d="M16 9.867c-3.733 0-6.8 3.067-6.8 6.8s3.067 6.8 6.8 6.8 6.8-3.067 6.8-6.8-3.067-6.8-6.8-6.8zm0 11.2c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4zM23.067 8c-.933 0-1.6.667-1.6 1.6s.667 1.6 1.6 1.6 1.6-.667 1.6-1.6S24 8 23.067 8zm6.133 3.2c0-1.467-.267-2.4-.667-3.2-.4-.933-.8-1.6-1.6-2.4s-1.467-1.2-2.4-1.6c-.8-.267-1.867-.533-3.2-.667H16c-3.6 0-4.133 0-5.467.133-1.467 0-2.4.267-3.2.667C6.4 4.4 5.6 4.8 4.933 5.6c-.8.667-1.2 1.467-1.6 2.267C3.066 8.8 2.8 9.734 2.8 11.2c-.133 1.333-.133 1.867-.133 5.467s0 4.133.133 5.467c0 1.467.267 2.4.667 3.2.4.933.8 1.6 1.6 2.4s1.467 1.2 2.4 1.6c.8.267 1.867.533 3.2.667H16c3.6 0 4.133 0 5.467-.133 1.467 0 2.4-.267 3.2-.667.933-.4 1.6-.8 2.4-1.6s1.2-1.467 1.6-2.4c.267-.8.533-1.867.667-3.2 0-1.467.133-1.867.133-5.467s-.133-4-.267-5.333zM26.8 22c0 1.333-.267 2-.4 2.533-.267.667-.533 1.067-.933 1.467s-.933.8-1.467.933c-.533.133-1.2.4-2.533.4-1.467 0-1.867.133-5.333.133s-4 0-5.333-.133c-1.333 0-2-.267-2.533-.4-.8-.133-1.2-.4-1.6-.933-.4-.4-.8-.933-.933-1.467-.267-.533-.533-1.2-.533-2.533 0-1.467-.133-1.867-.133-5.333s0-4 .133-5.333c0-1.333.267-2 .4-2.533.267-.667.533-1.067 1.067-1.467.4-.4.933-.8 1.467-.933.533-.267 1.2-.533 2.533-.533 1.467 0 1.867-.133 5.333-.133s4 0 5.333.133c1.333 0 2 .267 2.533.4.667.267 1.067.533 1.467 1.067.4.4.8.933.933 1.467.267.533.533 1.2.533 2.533 0 1.467.133 1.867.133 5.333s0 4-.133 5.333z"
                      ></path>
                    </svg>
                  </div>
                  <p className={cx('desc-text')}>
                    Send notifications via Instagram account when I receive a private message
                  </p>
                </div>

                <div className={cx('switch')}>
                  <button className={cx('btn-switch')} onClick={handleSwitch} type="button">
                    <span className={cx('slide')}>
                      <span className={cx('dot')}></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className={cx('base-container')}>
              <div className={cx('stripe-container')} style={{ borderLeft: '4px solid rgb(22, 24, 35)' }}>
                <div className={cx('description')}>
                  <div className={cx('description-icon')}>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1fmmx61-instagram"
                      className={cx('icon-brands')}
                      focusable="false"
                      ariaHidden="true"
                      viewBox="10 10 24 24"
                      dataTestid="tiktok.svgIcon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.5172 25.0575C25.4647 26.4295 24.3093 27.5306 22.8929 27.5306C22.5691 27.5306 22.2591 27.4729 21.9727 27.3675C22.2591 27.4729 22.5692 27.5306 22.893 27.5306C24.3094 27.5306 25.4648 26.4295 25.5174 25.0576L25.5224 12.8063H27.8124C28.0331 13.971 28.7405 14.9704 29.7205 15.5948C29.7208 15.5952 29.7212 15.5956 29.7215 15.596C30.4037 16.0305 31.2171 16.284 32.0903 16.284V16.9645C32.0903 16.9645 32.0903 16.9645 32.0904 16.9646V19.3405C30.4684 19.3405 28.9654 18.8334 27.7386 17.9728V24.1852C27.7386 27.2878 25.1559 29.8119 21.9812 29.8119C20.7545 29.8119 19.6169 29.4338 18.6818 28.7921C18.6813 28.7916 18.6808 28.791 18.6802 28.7905C17.1964 27.7717 16.224 26.0876 16.224 24.1846C16.224 21.0821 18.8067 18.5579 21.9814 18.5579C22.2448 18.5579 22.503 18.5791 22.7572 18.6128V19.337C19.861 19.4031 17.4865 21.5682 17.1713 24.3333C17.4868 21.5685 19.8611 19.4037 22.7571 19.3376V21.7342C22.5115 21.6591 22.2519 21.6154 21.9812 21.6154C20.5314 21.6154 19.3519 22.7683 19.3519 24.1852C19.3519 25.1719 19.9247 26.0292 20.7616 26.4596C20.7616 26.4597 20.7616 26.4597 20.7616 26.4597C21.1265 26.6474 21.541 26.7549 21.9811 26.7549C23.3975 26.7549 24.5529 25.6538 24.6055 24.2819L24.6105 12.0305H27.7385C27.7385 12.2955 27.7646 12.5545 27.8123 12.8063H25.5223L25.5172 25.0575Z"
                        fill="#161823"
                      ></path>
                    </svg>
                  </div>
                  <p className={cx('desc-text')}>
                    Send notifications via TikTok account when I receive a private message
                  </p>
                </div>

                <div className={cx('switch')}>
                  <button className={cx('btn-switch')} onClick={handleSwitch} type="button">
                    <span className={cx('slide')}>
                      <span className={cx('dot')}></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className={cx('container-table')}>
          <div className={cx('title')}>
            <h3>AI training</h3>
            <p className={cx('subtitle')}>
              Pixabay allows Canva AI to train using uploaded media with machine learning
            </p>
          </div>

          <div className={cx('table')}>
            <div className={cx('base-container', 'ai-training')}>
              <div className={cx('stripe-container')} style={{ borderLeft: '4px solid rgba(25, 27, 38, 0.64)' }}>
                <div className={cx('description')}>
                  <p className={cx('desc-text')}>Allow Canva AI training models to use my media on FeLi Image</p>
                </div>
                <div className={cx('switch')}>
                  <button className={cx('btn-switch', 'active')} onClick={handleSwitch} type="button">
                    <span className={cx('slide')}>
                      <span className={cx('dot')}></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div className={cx('container-table')}>
          <div className={cx('title')}>
            <h3>Login & Security</h3>
            <p className={cx('subtitle')}>Secure your account</p>
          </div>

          <div className={cx('table')}>
            <div className={cx('base-container')} style={{ border: 'none', width: '100%' }}>
              <div className={cx('table-sign-in')}>
                <div className={cx('label')}>
                  <p>Sign in with</p>
                </div>
                <div className={cx('buttons')}>
                  <Button text className={cx('btn')} leftIcon={<IconFacebook />} onClick={handleSignIn}>
                    Facebook
                  </Button>

                  <Button text className={cx('btn', 'active')} onClick={handleSignIn}>
                    <span className={cx('icon-check')}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={cx('icon-close')}>
                      <FontAwesomeIcon icon={faXmark} />
                    </span>
                    Google
                  </Button>
                </div>
              </div>
            </div>

            <div className={cx('base-container')} style={{ border: 'none', width: '100%' }}>
              <div className={cx('table-sign-in')}>
                <div className={cx('label')}>
                  <p>Update your password</p>
                </div>
                <div className={cx('buttons')}>
                  <Button text className={cx('btn-set-password')}>
                    Set password
                  </Button>
                </div>
              </div>

              <hr />
            </div>
          </div>
        </div>

        <div className={cx('container-table')}>
          <div className={cx('table')}>
            <div className={cx('base-container')} style={{ border: 'none', width: '100%' }}>
              <div className={cx('table')}>
                <div className={cx('label', 'text')}>
                  <p>Deactivate your account</p>
                </div>
                <div className={cx('buttons')}>
                  <Button text className={cx('btn-deactivate')}>
                    Deactivate account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('button-save')}>
          <Button primary>Save changes</Button>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
