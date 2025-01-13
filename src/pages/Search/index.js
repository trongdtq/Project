import { useEffect, useState } from 'react';

import ScrollToTop from '~/components/ScrollToTop';
import Filterbar from '~/layouts/components/Filterbar';
import Footer from '~/layouts/components/Footer';
import SearchProduct from '~/layouts/components/Search';

function Search() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Filterbar />
      <SearchProduct />
      <ScrollToTop scroll={scroll} />
      <Footer />
    </div>
  );
}

export default Search;
