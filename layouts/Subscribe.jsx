import { Button } from '@components';

const Subscribe = () => {
  return (
    <section className="padding__x w-full py-16 sm:py-32" id="contact">
      <div className="max__wrapper flex items-center justify-between gap-10 max-lg:flex-col">
        <h3 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
          Inscrivez-vous à la
          <span className="text-accent"> newsletter</span>
        </h3>
        <form className="flex w-full items-center gap-5 rounded-full px-5 py-2.5 max-sm:flex-col sm:border sm:border-gray lg:max-w-[45%]">
          <label className="sr-only" htmlFor="newsletter">
            S'inscrire à la newsletter
          </label>
          <input
            className="border border-transparent bg-white pl-2 text-base leading-normal text-gray outline-offset-8 outline-accent max-sm:w-full max-sm:rounded-full max-sm:border-gray max-sm:py-4 max-sm:pl-3 sm:flex-1"
            type="text"
            id="newsletter"
            placeholder="newsletter@nike.com"
          />
          <div className="flex items-center max-sm:w-full max-sm:justify-end">
            <Button
              title="S'inscrire"
              type="submit"
              variant="button__red--sm"
              full
            />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Subscribe;
