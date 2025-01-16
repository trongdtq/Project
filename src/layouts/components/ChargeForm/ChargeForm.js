import classNames from 'classnames/bind';

import styles from './ChargeForm.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faDollar } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ChargeForm() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('title')}>
            <h1>FeLiImage pricing plans: explore 500M+ assets & easy design tools</h1>
          </div>

          <div className={cx('main-content')}>
            <div className={cx('package-item')}>
              <div className={cx('head')}>
                <p className={cx('head-title')}>Classic Annual Package</p>
              </div>

              <div className={cx('body')}>
                <h3 className={cx('desc')}>
                  Standard Perpetual License · Downloadable in any size (except extra large) · Downloads for one year
                </h3>

                <div className={cx('price-list')}>
                  <div className={cx('price-item')}>
                    <div className={cx('item-radio')}>
                      <input className={cx('radio')} name={'price-yearly'} type="radio" value="1" />
                    </div>

                    <label className={cx('radio-content')}>
                      <span className={cx('item-number')}>25 downloads</span>
                      <span className={cx('item-price')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        86.99
                      </span>
                      <span className={cx('item-price-single')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        <b>3.50</b> / one download
                      </span>
                    </label>
                  </div>

                  <div className={cx('price-item')}>
                    <div className={cx('item-radio')}>
                      <input className={cx('radio')} name={'price-yearly'} type="radio" value="1" />
                    </div>

                    <label className={cx('radio-content')}>
                      <span className={cx('item-number')}>100 downloads </span>
                      <span className={cx('item-price')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        319.99
                      </span>
                      <span className={cx('item-price-single')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        <b>3.20</b> / one download
                      </span>
                    </label>
                  </div>

                  <div className={cx('price-item')}>
                    <div className={cx('item-radio')}>
                      <input className={cx('radio')} name={'price-yearly'} type="radio" value="1" />
                    </div>

                    <label className={cx('radio-content')}>
                      <span className={cx('item-number')}>200 downloads</span>
                      <span className={cx('item-price', 'sale')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        559.99 <span className={cx('original-price')}>(600.00)</span>
                      </span>
                      <span className={cx('item-price-single')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        <b>2.80</b> / one download
                      </span>
                    </label>
                  </div>

                  <div className={cx('price-item')}>
                    <div className={cx('item-radio')}>
                      <input className={cx('radio')} name={'price-yearly'} type="radio" value="1" />
                    </div>

                    <label className={cx('radio-content')}>
                      <span className={cx('item-number')}>500 downloads</span>
                      <span className={cx('item-price', 'sale')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        1199.99 <span className={cx('original-price')}>(1300.00)</span>
                      </span>
                      <span className={cx('item-price-single')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        <b>2.40</b> / one download
                      </span>
                    </label>
                  </div>
                </div>

                <div className={cx('category')}>
                  <div className={cx('category-number')}>
                    <span>500 and up</span>
                  </div>
                  <div className={cx('category-btn')}>
                    <Button className={cx('btn')} square>
                      Customer Service FAQ
                    </Button>
                  </div>
                </div>

                <div className={cx('subscribe')}>
                  <Button className={cx('subscribe-btn')} square>
                    Buy
                  </Button>
                </div>
              </div>
            </div>

            <div className={cx('package-item')}>
              <div className={cx('head')}>
                <p className={cx('head-title')}>Monthly Subscription Package</p>
              </div>

              <div className={cx('body')}>
                <h3 className={cx('desc')}>
                  Standard Perpetual License · Downloadable in any size (except extra large) · Download within 30 days
                </h3>

                <div className={cx('price-list')}>
                  <div className={cx('price-item', 'item-date')}>
                    <Button className={cx('item-btn')} square>
                      30 Days
                    </Button>
                    <Button disable className={cx('item-btn')} square>
                      365 Days
                    </Button>
                  </div>

                  <div className={cx('price-item')}>
                    <div className={cx('item-radio')}>
                      <input className={cx('radio')} name={'price-monthly'} type="radio" value="1" />
                    </div>

                    <label className={cx('radio-content')}>
                      <span className={cx('item-number')}>100 downloads</span>
                      <span className={cx('item-price')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        319.99
                      </span>
                      <span className={cx('item-price-single')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        <b>3.20</b> / one download
                      </span>
                    </label>
                  </div>

                  <div className={cx('price-item')}>
                    <div className={cx('item-radio')}>
                      <input className={cx('radio')} name={'price-monthly'} type="radio" value="1" />
                    </div>

                    <label className={cx('radio-content')}>
                      <span className={cx('item-number')}>200 lượt tải xuống</span>
                      <span className={cx('item-price', 'sale')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        559.99 <span className={cx('original-price')}>(600.00)</span>
                      </span>
                      <span className={cx('item-price-single')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        <b>2.80</b> / one download
                      </span>
                    </label>
                  </div>

                  <div className={cx('price-item')}>
                    <div className={cx('item-radio')}>
                      <input className={cx('radio')} name={'price-monthly'} type="radio" value="1" />
                    </div>

                    <label className={cx('radio-content')}>
                      <span className={cx('item-number')}>500 downloads</span>
                      <span className={cx('item-price', 'sale')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        1199.99 <span className={cx('original-price')}>(1300.00)</span>
                      </span>
                      <span className={cx('item-price-single')}>
                        <i>
                          <FontAwesomeIcon icon={faDollar} />
                        </i>
                        <b>2.40</b> / one download
                      </span>
                    </label>
                  </div>
                </div>

                <div className={cx('category')}>
                  <div className={cx('category-number')}>
                    <span>2500 and up </span>
                  </div>
                  <div className={cx('category-btn')}>
                    <Button className={cx('btn')} square>
                      Customer Service FAQ
                    </Button>
                  </div>
                </div>

                <div className={cx('subscribe')}>
                  <Button className={cx('subscribe-btn')} square>
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className={cx('background')}>
            <Image
              className={cx('background-img')}
              src={
                'https://images.pexels.com/photos/9539890/pexels-photo-9539890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            />
          </div>
        </div>

        <div className={cx('offers-info')}>
          <p>
            The image license provided by the package is a standard perpetual license (no extended authorization is
            applicable) the package can download photos and vector images of any size (except the number of downloads in
            the annual package is valid for 1) year and the number of downloads in the monthly subscription package is
            valid for 1 year. The number is valid for 30 days and the number of downloads exceeding the period will be
            invalid after expiration. Purchase a package of more than{' '}
            <i>
              <FontAwesomeIcon icon={faDollar} />
            </i>
            999 within a year to upgrade to the company's VIP. The annual package and the monthly subscription package
            cannot be purchased at the same time.
          </p>
        </div>

        <div className={cx('question')}>
          <div className={cx('question-container')}>
            <h2 className={cx('question-title')}>Answering your questions</h2>
            <ul className={cx('questions-list')}>
              <li className={cx('item-question')}>
                <i className={cx('item-icon')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </i>
                <span className={cx('paragraph-wrapper')}>
                  <p className={cx('item-paragraph')}>Is there a time limit on licensing images?</p>
                  <p className={cx('item-paragraph-active')}>
                    There is no time limit on the use of images purchased on Yestone. The authorization starts on the
                    day of purchase.
                  </p>
                </span>
              </li>

              <li className={cx('item-question')}>
                <i className={cx('item-icon')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </i>
                <span className={cx('paragraph-wrapper')}>
                  <p className={cx('item-paragraph')}>
                    Can images be used commercially? Are there any restrictions on the scope of use?
                  </p>
                  <p className={cx('item-paragraph-active')}>
                    All images purchased on Yestone.com can be used for commercial purposes. The image authorization
                    obtained by the user is a non-exclusive commercial use authorization. The purchasing user can use
                    the image without time limit and without geographical limit. Images used for "re-sale products"
                    require the purchase of "extended use authorization". Some images marked with "media use only"
                    cannot be used for advertising or promotional purposes. They can only be used for descriptive
                    purposes in non-commercial environments as illustrations for news and articles.
                  </p>
                </span>
              </li>

              <li className={cx('item-question')}>
                <i className={cx('item-icon')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </i>
                <span className={cx('paragraph-wrapper')}>
                  <p className={cx('item-paragraph')}>
                    Is there proof of legal authorization after purchasing the images?
                  </p>
                  <p className={cx('item-paragraph-active')}>
                    After you purchase the image, you can download the authorization letter in "Purchase History" . The
                    authorization letter is a PDF document with Yishi's special seal and has legal effect.
                  </p>
                </span>
              </li>

              <li className={cx('item-question')}>
                <i className={cx('item-icon')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </i>
                <span className={cx('paragraph-wrapper')}>
                  <p className={cx('item-paragraph')}>Does the price of the image include tax?</p>
                  <p className={cx('item-paragraph-active')}>
                    Yes. All prices in pictures and package purchase plans on Yestone.com are inclusive of tax.
                  </p>
                </span>
              </li>

              <li className={cx('item-question')}>
                <i className={cx('item-icon')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </i>
                <span className={cx('paragraph-wrapper')}>
                  <p className={cx('item-paragraph')}>Is it possible to get a refund?</p>
                  <p className={cx('item-paragraph-active')}>
                    Yes, you can request a refund if you do not use it within 3 days after recharging. If an invoice has
                    been issued, the original invoice must be sent back. You need to contact customer service to get a
                    refund.
                  </p>
                </span>
              </li>

              <li className={cx('item-question')}>
                <i className={cx('item-icon')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </i>
                <span className={cx('paragraph-wrapper')}>
                  <p className={cx('item-paragraph')}>Can purchased images be returned?</p>
                  <p className={cx('item-paragraph-active')}>
                    Yes, if you do not use your account within 3 days after recharging, you can apply for a refund. If
                    you have already issued an invoice, you need to send the original invoice back. For a refund, please
                    contact customer service.
                  </p>
                </span>
              </li>

              <li className={cx('item-question')}>
                <i className={cx('item-icon')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </i>
                <span className={cx('paragraph-wrapper')}>
                  <p className={cx('item-paragraph')}>Can I upscale my image if it's too small?</p>
                  <p className={cx('item-paragraph-active')}>
                    Yes. If the image accuracy does not meet your needs, you can substitute a larger sized image by
                    paying the price difference. Please contact Yestone customer service for specific operations. The
                    size upgrade currently only supports users to deposit with cash. If you have purchased an M size
                    image and want to change it to a vector format of the same image, please purchase again.
                  </p>
                </span>
              </li>
            </ul>
            <div className={cx('help-customers')}>
              <span className={cx('help-text')}>Have a question?</span>
              <span className={cx('help-text')}>
                Visit the{' '}
                <a href="/" className={cx('customer-link')}>
                  FeLiImage Help Center
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChargeForm;
