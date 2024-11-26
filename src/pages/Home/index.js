import Advantage from '~/layouts/components/Advantage';
import Filterbar from '~/layouts/components/Filterbar';
import Footer from '~/layouts/components/Footer';
import Guide from '~/layouts/components/Guide';
import Poster from '~/layouts/components/Poster';
import Slider from '~/layouts/components/Slider';

function Home() {
  return (
    <div style={{ height: 1000 }}>
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
