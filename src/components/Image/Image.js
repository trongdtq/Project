import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      loading="lazy"
      ref={ref}
      src={fallback || src}
      className={classNames(styles.wrapper, className)}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
