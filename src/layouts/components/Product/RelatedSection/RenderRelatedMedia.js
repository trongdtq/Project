import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './RelatedSection.module.scss';
import MediaItem from '~/components/MediaItem';

function RenderRelatedMedia({ data = [], onClick }) {
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location]);

  if (data.length === 0) return;

  return (
    <>
      {data.length === 0 && loading ? (
        <CircularProgress />
      ) : (
        data.map((item, index) => (
          <MediaItem key={item.id} data={item} className={styles.item} classNameMainCard={styles.img} />
        ))
      )}
    </>
  );
}

export default RenderRelatedMedia;
