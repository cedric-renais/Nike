import { Button } from '@components';
import { offer } from '@public/assets/images';
import Image from 'next/image';

const SpecialOffer = () => {
  return (
    <section className="padding">
      <div className="max__wrapper flex items-center justify-between gap-10 max-xl:flex-col-reverse">
        <div className="flex-1">
          <Image
            className="w-full object-contain"
            src={offer}
            alt="-30%, offre spéciale Nike."
            width={773}
            height={687}
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl font-bold">
            Offre <span className="text-accent">Spéciale</span>
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray lg:max-w-3xl">
            Lancez-vous dans un voyage de shopping qui redéfinit votre
            expérience avec des offres imbattables. De nos sélections de premier
            choix aux économies incroyables, nous offrons une valeur inégalée
            qui nous distingue.
          </p>
          <p className="mt-6 text-lg leading-7 text-gray lg:max-w-3xl">
            Explorez un univers de possibilités conçu pour satisfaire vos désirs
            uniques, dépassant les attentes les plus élevées. Votre voyage avec
            nous est tout simplement exceptionnel.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button
              type="button"
              title="Achetez maintenant"
              icon="/assets/icons/arrow.svg"
              variant="button__red"
            />
            <Button
              type="button"
              title="En savoir plus"
              variant="button__white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
