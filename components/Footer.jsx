import { footerLinks, socialMedia } from '@constants';
import { logoWhite } from '@public/assets/images';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="padding__x bg-gray pb-8 pt-12 sm:pt-24">
      <div className="max__wrapper">
        <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
          <div className="flex flex-col items-start">
            <Link href="#">
              <Image
                src={logoWhite}
                alt="Nike, retour à l'accueil"
                width={150}
                height={46}
              />
            </Link>
            <p className="mt-6 font-montserrat leading-7 text-white sm:max-w-sm">
              Découvrez des chaussures idéales pour la nouvelle saison dans le
              magasin Nike le plus proche. Trouvez votre taille sur place et
              profitez de récompenses exclusives.
            </p>
            <div className="mt-8 flex items-center gap-5">
              {socialMedia.map((icon) => (
                <Link key={icon.src} href={icon.href}>
                  <div className="flex__center h-12 w-12 rounded-full bg-white">
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={24}
                      height={24}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li className="mt-3" key={link.name}>
                      <Link
                        className="font-montserrat text-base leading-normal text-white underline-offset-4 hover:underline"
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 flex justify-between text-white max-sm:flex-col max-sm:items-center">
          <div className="justify- flex flex-1 items-center gap-2 font-montserrat">
            <p className="font-montserrat">
              © {date} Nike. Tous droits réservés.
            </p>
          </div>
          <Link
            href="#"
            className="font-montserrat text-base leading-normal text-white underline-offset-4 hover:underline"
          >
            Conditions générales
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
