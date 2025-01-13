import classNames from 'classnames/bind';

import styles from './Settings.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProfileSettings() {
  return (
    <div className={cx('profile-settings')}>
      <div className={cx('head-profile')}>
        <h1>Your details</h1>
      </div>

      <div className={cx('content-profile')}>
        <div className={cx('subtitle-profile')}>
          <p>Information that will be displayed on your profile</p>
        </div>

        <div className={cx('container-table')}>
          <div className={cx('base-container')}>
            <div className={cx('description')}>
              <label className={cx('label')}>
                Username<span className={cx('desc-text')}>This will be displayed on your profile</span>
              </label>
            </div>
            <div className={cx('text-input')}>
              <input value={'u_lbmgxxdtkc'} className={cx('input-styles')} type="text" />
            </div>
          </div>

          <div className={cx('base-container')}>
            <div className={cx('inner-content')}>
              <div className={cx('base-item')}>
                <div className={cx('description')}>
                  <label className={cx('label')}>First name</label>
                </div>
                <div className={cx('text-input')}>
                  <input className={cx('input-styles')} placeholder="Enter your first name" type="text" />
                </div>
              </div>

              <div className={cx('base-item')}>
                <div className={cx('description')}>
                  <label className={cx('label')}>Last name</label>
                </div>
                <div className={cx('text-input')}>
                  <input className={cx('input-styles')} placeholder="Enter your last name" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className={cx('base-container')}>
            <div className={cx('description')}>
              <label className={cx('label')}>About me</label>
            </div>
            <div className={cx('text-input')}>
              <textarea
                placeholder="In a few words, tell us about yourself"
                className={cx('input-styles', 'input-styles-about')}
                type="text"
              />
            </div>
          </div>

          <div className={cx('base-container')}>
            <div className={cx('inner-content')}>
              <div className={cx('base-item')}>
                <div className={cx('description')}>
                  <label className={cx('label')}>Country</label>
                </div>
                <div className={cx('text-input')}>
                  <input className={cx('input-styles')} placeholder="Enter your country" type="text" />
                </div>
              </div>

              <div className={cx('base-item')}>
                <div className={cx('description')}>
                  <label className={cx('label')}>City</label>
                </div>
                <div className={cx('text-input')}>
                  <input className={cx('input-styles')} placeholder="Enter your city" type="text" />
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div className={cx('container-table')}>
          <div className={cx('title')}>
            <h3>Donations</h3>
            <p className={cx('subtitle')}>Add a donate button to your profile by adding a donation link</p>
          </div>

          <div className={cx('button-secondary')}>
            <Button outline className={cx('btn')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
              Add a donation link
            </Button>
          </div>

          <hr />
        </div>

        <div className={cx('container-table')}>
          <div className={cx('title')}>
            <h3>Online profiles</h3>
            <p className={cx('subtitle')}>Add your links to your profile</p>
          </div>

          <div className={cx('base-container')}>
            <div className={cx('inner-content')}>
              <div className={cx('base-item')}>
                <div className={cx('description')}>
                  <label className={cx('label')}>X/Twitter</label>
                </div>
                <div className={cx('text-input')}>
                  <div className={cx('icon-input')}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                        fill="#000"
                        stroke="#fff"
                        strokeWidth="0.019"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M6.456 6.786l4.302 5.752-4.33 4.676h.975l3.79-4.094 3.063 4.094h3.315l-4.544-6.075 4.03-4.353h-.975l-3.49 3.77-2.82-3.77H6.456zm1.433.717h1.523l6.726 8.993h-1.523L7.889 7.503z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </div>

                  <input className={cx('input-styles')} placeholder="https://twitter.com/" type="text" />
                </div>
              </div>

              <div className={cx('base-item')}>
                <div className={cx('description')}>
                  <label className={cx('label')}>Youtube</label>
                </div>
                <div className={cx('text-input')}>
                  <div className={cx('icon-input')}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.258 6.32c.674.18 1.259.72 1.439 1.394.404 1.664.404 6.205 0 7.823-.18.675-.765 1.214-1.44 1.394-1.663.45-10.88.45-12.498 0-.674-.18-1.259-.72-1.438-1.394-.45-1.753-.405-6.114 0-7.823.18-.674.764-1.214 1.438-1.393 1.754-.45 10.97-.405 12.499 0zM10.39 14.01V9.243l4.181 2.383-4.181 2.383z"
                        fill="red"
                      ></path>
                    </svg>
                  </div>
                  <input className={cx('input-styles')} placeholder="https://youtube.com/" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className={cx('base-container')}>
            <div className={cx('inner-content')}>
              <div className={cx('base-item')}>
                <div className={cx('description')}>
                  <label className={cx('label')}>Facebook</label>
                </div>
                <div className={cx('text-input')}>
                  <div className={cx('icon-input')}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 12.049C20 7.603 16.419 4 12 4c-4.419 0-8 3.603-8 8.049 0 4.018 2.925 7.347 6.75 7.951v-5.625H8.719V12.05h2.031v-1.774c0-2.016 1.194-3.13 3.022-3.13.875 0 1.79.156 1.79.156v1.981h-1.009c-.994 0-1.303.621-1.303 1.258v1.509h2.219l-.355 2.326H13.25V20c3.825-.604 6.75-3.933 6.75-7.951z"
                        fill="#4267B2"
                      ></path>
                    </svg>
                  </div>
                  <input className={cx('input-styles')} placeholder="https://faecbook.com/" type="text" />
                </div>
              </div>

              <div className={cx('base-item')}>
                <div className={cx('description')}>
                  <label className={cx('label')}>Instagram</label>
                </div>
                <div className={cx('text-input')}>
                  <div className={cx('icon-input')}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.762 4.42a3.924 3.924 0 00-1.419.923 3.912 3.912 0 00-.923 1.415c-.199.508-.332 1.09-.371 1.942C4.009 9.552 4 9.826 4 11.998c0 2.173.01 2.446.049 3.299.039.852.175 1.434.37 1.941.206.527.479.973.924 1.419.446.445.892.718 1.419.923.507.199 1.09.332 1.941.371.853.04 1.126.049 3.299.049 2.172 0 2.446-.01 3.298-.049.852-.039 1.434-.175 1.942-.37a3.922 3.922 0 001.418-.924c.445-.446.719-.892.924-1.419.198-.507.331-1.09.37-1.941.04-.853.05-1.126.05-3.299 0-2.172-.01-2.446-.05-3.298-.039-.852-.175-1.434-.37-1.942a3.946 3.946 0 00-.92-1.415 3.923 3.923 0 00-1.419-.923c-.508-.199-1.09-.332-1.942-.371-.852-.04-1.125-.049-3.298-.049s-2.446.01-3.298.049c-.856.036-1.438.172-1.945.37zm8.473 1.066c.78.036 1.203.166 1.486.277.374.146.641.319.92.598.28.28.453.547.6.921.11.283.24.706.276 1.486.039.843.045 1.097.045 3.234s-.01 2.39-.045 3.233c-.036.78-.166 1.203-.277 1.486-.146.374-.318.641-.598.92-.28.28-.547.453-.92.6-.284.11-.707.24-1.487.276-.843.039-1.096.045-3.233.045s-2.391-.01-3.234-.045c-.78-.036-1.203-.166-1.486-.277a2.493 2.493 0 01-.92-.598 2.493 2.493 0 01-.599-.92c-.11-.284-.24-.707-.277-1.487-.039-.843-.045-1.096-.045-3.233s.01-2.391.045-3.234c.036-.78.166-1.203.277-1.486.146-.374.319-.64.598-.92.28-.28.547-.453.921-.599.283-.11.706-.24 1.486-.277.843-.039 1.097-.045 3.234-.045s2.39.006 3.233.045z"
                        fill="url(#instagram_icon_svg__paint0_radial_6307_1955)"
                      ></path>
                      <path
                        d="M7.893 12.002a4.108 4.108 0 108.217 0 4.108 4.108 0 00-8.217 0zm6.776 0a2.667 2.667 0 11-5.333 0 2.667 2.667 0 015.333 0z"
                        fill="url(#instagram_icon_svg__paint1_radial_6307_1955)"
                      ></path>
                      <path d="M16.276 8.69a.96.96 0 100-1.919.96.96 0 000 1.92z" fill="#654C9F"></path>
                      <defs>
                        <radialGradient
                          id="instagram_icon_svg__paint0_radial_6307_1955"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="matrix(23.10519 -1.21093 1.02927 19.63915 4.291 18.535)"
                        >
                          <stop stopColor="#FED576"></stop>
                          <stop offset="0.263" stopColor="#F47133"></stop>
                          <stop offset="0.609" stopColor="#BC3081"></stop>
                          <stop offset="1" stopColor="#4C63D2"></stop>
                        </radialGradient>
                        <radialGradient
                          id="instagram_icon_svg__paint1_radial_6307_1955"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="matrix(11.86482 -.62183 .52855 10.08496 8.042 15.356)"
                        >
                          <stop stopColor="#FED576"></stop>
                          <stop offset="0.263" stopColor="#F47133"></stop>
                          <stop offset="0.609" stopColor="#BC3081"></stop>
                          <stop offset="1" stopColor="#4C63D2"></stop>
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <input className={cx('input-styles')} placeholder="https://instagram.com/" type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className={cx('base-container')}>
            <div className={cx('inner-content')}>
              <div className={cx('base-item')}>
                <div className={cx('description')}>
                  <label className={cx('label')}>SoundCloud</label>
                </div>
                <div className={cx('text-input')}>
                  <div className={cx('icon-input')}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 17H6V8.932a4.099 4.099 0 011-.566V17zm3 0h1V7.776a5.576 5.576 0 00-.621.857L10 8.449V17zm-2 0h1V8.152c-.508-.079-.623-.05-1-.01V17zm-4 0h1V9.98a4.69 4.69 0 00-.692 1.535L4 11.333V17zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268V11.75zm18.879-.671C19.675 8.242 17.475 6 14.762 6A4.846 4.846 0 0012 6.877V17h9.089C22.696 17 24 15.607 24 13.894c0-2.233-2.168-3.772-4.121-2.815zM3 11.052c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z"
                        fill="#F50"
                      ></path>
                    </svg>
                  </div>
                  <input className={cx('input-styles')} placeholder="https://soundcloud.com/" type="text" />
                </div>
              </div>

              <div className={cx('base-item')}>
                <div className={cx('description')}>
                  <label className={cx('label')}>Spotify</label>
                </div>
                <div className={cx('text-input')}>
                  <div className={cx('icon-input')}>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#spotify_icon_svg__clip0_10234_12977)">
                        <path
                          d="M12 4.258c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8z"
                          fill="#1ED760"
                        ></path>
                        <path
                          d="M17.116 11.455a.742.742 0 01-.416-.126c-2.297-1.37-6.403-1.7-9.061-.958-.116.032-.262.084-.416.084a.744.744 0 01-.752-.761c0-.44.27-.688.561-.771 1.136-.333 2.407-.49 3.79-.49 2.355 0 4.823.49 6.626 1.541.252.145.416.345.416.73a.747.747 0 01-.748.75zm-1 2.458c-.168 0-.28-.074-.397-.136-2.016-1.193-5.022-1.674-7.696-.948-.155.042-.24.084-.384.084a.626.626 0 01-.626-.626c0-.345.168-.574.5-.668a10.85 10.85 0 013.155-.438c2.093 0 4.116.519 5.71 1.467.26.155.364.355.364.636a.625.625 0 01-.626.629zm-.868 2.116c-.135 0-.219-.042-.345-.116-2.013-1.213-4.355-1.265-6.668-.79-.125.032-.29.083-.383.083a.502.502 0 01-.51-.51c0-.332.197-.49.439-.541 2.642-.584 5.342-.532 7.645.845.197.126.313.239.313.532a.487.487 0 01-.49.497z"
                          fill="#000"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="spotify_icon_svg__clip0_10234_12977">
                          <path fill="#fff" transform="translate(4 4)" d="M0 0h16v16.516H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <input className={cx('input-styles')} placeholder="https://spotify.com/" type="text" />
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
// Form profile settings
export default ProfileSettings;
