import Image from 'next/image';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <button
      className={`rounded-xl border-2 ${
        bigShoeImage === imgURL.bigShoe ? 'border-gray' : 'border-transparent'
      } cursor-pointer outline-offset-8 outline-accent max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex__center rounded-xl bg-thumbnail bg-cover bg-center shadow-lg max-sm:p-4 sm:h-40 sm:w-40">
        <Image
          className="object-contain"
          src={imgURL.thumbnail}
          alt={`Miniature de ${imgURL.alt}`}
          width={140}
          height={120}
          loading="lazy"
        />
      </div>
    </button>
  );
};

export default ShoeCard;
