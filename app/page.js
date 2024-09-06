import { Navbar } from '@components';
import { Hero, PopularProducts } from '@layouts';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProducts />
    </>
  );
};
export default Home;
