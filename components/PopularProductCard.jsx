import { star } from '@public/assets/icons';
import Image from 'next/image';

const PopularProductCard = ({ imgURL, name, price, alt, rating }) => {
  return (
    <div className="max-sm:flex__center flex w-full flex-1 flex-col">
      <Image
        className="w-full cursor-pointer rounded-2xl shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        src={imgURL}
        alt={alt}
        width={282}
        height={282}
        loading="lazy"
      />
      <div className="mt-8 flex items-center justify-start gap-2.5">
        <Image src={star} alt="" width={24} height={24} />
        <p className="text-xl leading-normal text-gray">({rating})</p>
      </div>
      <h3 className="mt-2 font-palanquin text-xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="mt-2 text-lg font-semibold leading-normal text-accent">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
