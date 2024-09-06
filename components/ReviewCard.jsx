import { star } from '@public/assets/icons';
import Image from 'next/image';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex__center flex-col rounded-2xl bg-thumbnail bg-cover px-6 py-4 shadow-lg">
      <Image
        className="mt-6 rounded-full object-cover"
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
        loading="lazy"
      />
      <p className="mt-4 text-balance text-center text-lg leading-7">
        {feedback}
      </p>
      <div className="mt-4 flex gap-2">
        <Image
          className="object-contain"
          src={star}
          alt=""
          width={24}
          height={24}
        />
        <p>({rating})</p>
      </div>
      <h4 className="mb-4 mt-4 font-palanquin text-xl font-bold">
        {customerName}
      </h4>
    </div>
  );
};
export default ReviewCard;
