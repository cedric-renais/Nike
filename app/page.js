import { Navbar } from '@components';
import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
} from '@layouts';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
    </>
  );
};
export default Home;
