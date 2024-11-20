import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import styles from './Image.module.scss';
import images from '~/assets/images';

const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      ref={ref}
      src={fallback || src}
      className={classNames(styles.wrapper, className)}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
