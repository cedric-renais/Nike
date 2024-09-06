import { Footer, Navbar } from '@components';
import {
  CustomerReviews,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
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
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </>
  );
};
export default Home;
