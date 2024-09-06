import Image from 'next/image';

const ServiceCard = ({ imgURL, title, subtext }) => {
  return (
    <div className="w-full flex-1 rounded-[30px] bg-thumbnail bg-cover px-10 py-16 shadow-lg sm:min-w-[350px]">
      <div className="flex__center h-11 w-11 rounded-full bg-accent">
        <Image src={imgURL} alt="" width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
        {title}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-7">
        {subtext}
      </p>
    </div>
  );
};
export default ServiceCard;
