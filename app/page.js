import { Navbar } from '@components';
import { Hero, PopularProducts, Services, SuperQuality } from '@layouts';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
    </>
  );
};
export default Home;
