import { PopularProductCard } from '@components';
import { products } from '@constants';

const PopularProducts = () => {
  return (
    <section className="padding" id="products">
      <div className="max__wrapper max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="font-palanquin text-4xl">
            Nos <span className="text-accent">produits</span> populaires
          </h2>
          <p className="mt-2 text-lg leading-7 text-gray lg:max-w-lg">
            Découvrez une qualité exceptionnelle avec nos sélections prisées.
            Plongez dans un univers de confort, de design et de valeur.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <PopularProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PopularProducts;
