import { ReviewCard } from '@components';
import { reviews } from '@constants';

const CustomerReviews = () => {
  return (
    <section className="padding">
      <div className="max__wrapper">
        <h3 className="text-center font-palanquin text-4xl font-bold">
          Ce que nos
          <span className="text-accent"> clients </span>
          disent ?
        </h3>
        <p className="m-auto mt-4 max-w-lg text-center text-lg leading-7 text-gray">
          Découvrez les témoignages authentiques de nos clients satisfaits de
          leur expérience exceptionnelle avec nous.
        </p>
        <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CustomerReviews;
