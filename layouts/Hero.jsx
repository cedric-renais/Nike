'use client';

import { Button, ShoeCard } from '@components';
import { shoes, statistics } from '@constants';
import { bigShoe1 } from '@public/assets/images';
import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  const [bigShoeAlt, setBigShoeAlt] = useState(shoes[0].alt);

  const changeBigShoeAlt = (alt) => {
    setBigShoeAlt(alt);
  };

  return (
    <section className="xl:padding__l wide:padding__r padding__b">
      <div
        className="max__wrapper flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
        id="home"
      >
        <div className="max-xl:padding__x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
          <p className="text-xl text-accent">Nos collections d'été</p>
          <h1 className="z-10 mt-10 rounded-2xl pr-10 font-palanquin text-8xl font-bold max-sm:text-4xl max-sm:leading-[64px] xl:whitespace-nowrap">
            <span>Les nouvelles</span>
            <br />
            <span className="mt-3 inline-block text-accent">Nike</span> sont là.
          </h1>
          <p className="mb-14 mt-6 text-lg leading-7 text-gray sm:max-w-sm">
            Découvrez les nouvelles baskets Nike, alliant confort de qualité et
            innovation pour votre vie active.
          </p>
          <Button
            type="button"
            title="Achetez maintenant"
            icon="/assets/icons/arrow.svg"
            variant="button__red"
          />
          <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
            {statistics.map((stat, index) => (
              <div key={index}>
                <span className="font-palanquin text-4xl font-bold">
                  {stat.value}
                </span>
                <p className="leading-7 text-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex__center relative flex-1 max-xl:py-40 xl:min-h-screen">
          <Image
            className="relative z-10 mb-10 object-contain"
            src={bigShoeImage}
            alt={bigShoeAlt}
            width={610}
            height={500}
            priority
          />
          <div className="absolute bottom-0 mb-6 flex gap-4 max-sm:px-6 sm:gap-6">
            {shoes.map((shoe, index) => (
              <div key={index}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={() => {
                    setBigShoeImage(shoe.bigShoe);
                    changeBigShoeAlt(shoe.alt);
                  }}
                  bigShoeImage={bigShoeImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
