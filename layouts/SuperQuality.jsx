import { Button } from '@components';
import { shoe5 } from '@public/assets/images';
import Image from 'next/image';

const SuperQuality = () => {
  return (
    <section className="padding" id="about">
      <div
        className="max__wrapper flex w-full items-center justify-between gap-10 max-lg:flex-col"
        id="about"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
            Nous vous offrons
            <span className="text-accent"> des chaussures </span>
            de super qualité.
          </h2>
          <p className="info-text mt-4 lg:max-w-lg">
            En garantissant un confort et un style haut de gamme, nos chaussures
            méticuleusement conçues sont faites pour rehausser votre expérience,
            vous offrant une qualité inégalée, de l'innovation et une touche
            d'élégance.
          </p>
          <p className="info-text mt-6 lg:max-w-lg">
            Notre engagement envers le détail et l'excellence garantit votre
            satisfaction.
          </p>
          <div className="mt-11">
            <Button
              type="button"
              title="Voir les détails"
              variant="button__red"
            />
          </div>
        </div>
        <div className="flex-center flex-1">
          <Image
            className="object-contain"
            src={shoe5}
            alt="baskets multicolores."
            width={570}
            height={522}
          />
        </div>
      </div>
    </section>
  );
};
export default SuperQuality;
