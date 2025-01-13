import { useEffect, useState } from 'react';
import ScrollToTop from '~/components/ScrollToTop';
import Advantage from '~/layouts/components/Advantage';
import Filterbar from '~/layouts/components/Filterbar';
import Footer from '~/layouts/components/Footer';
import Guide from '~/layouts/components/Guide';
import Poster from '~/layouts/components/Poster';
import Slider from '~/layouts/components/Slider';

function Home() {
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
    <div style={{ position: 'relative' }}>
      <ScrollToTop scroll={scroll} />
      <Filterbar />
      <Slider />
      <Advantage />
      <Poster />
      <Guide />
      <Footer />
    </div>
  );
}

export default Home;
