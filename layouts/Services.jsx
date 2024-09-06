import { ServiceCard } from '@components';
import { services } from '@constants';

const Services = () => {
  return (
    <section className="padding__x py-10">
      <div className="max__wrapper flex flex-wrap justify-center gap-9">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
export default Services;
