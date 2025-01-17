import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Loading from '~/components/Loading';

import MediaItem from '~/components/MediaItem';

function RenderSearchResult({ data = [] }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (!!data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  if (data.length === 0) return;

  return <>{loading ? <Loading /> : data.hits.map((item) => <MediaItem key={item.id} data={item} />)}</>;
}

RenderSearchResult.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RenderSearchResult;
