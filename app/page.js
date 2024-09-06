import { Navbar } from '@components';
import { Hero, PopularProducts, SuperQuality } from '@layouts';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProducts />
      <SuperQuality />
    </>
  );
};
export default Home;
