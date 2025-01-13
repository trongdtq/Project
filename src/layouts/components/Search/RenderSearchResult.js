import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MediaItem from '~/components/MediaItem';

function RenderSearchResult({ data = [], onClick }) {
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    if (!!data) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [location]);

  // console.log('data', !!data);
  if (data.length === 0) return;

  return <>{loading ? <CircularProgress /> : data.hits.map((item) => <MediaItem key={item.id} data={item} />)}</>;
}

export default RenderSearchResult;
