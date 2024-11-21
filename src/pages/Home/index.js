import Filterbar from '~/layouts/components/Filterbar';
import Slider from '~/layouts/components/Slider';

function Home() {
  return (
    <div style={{ height: 1000 }}>
      <Filterbar />
      <Slider />
    </div>
  );
}

export default Home;
