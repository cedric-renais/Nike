'use client';

import { navLinks } from '@constants';
import { Close, Hamburger } from '@public/assets/icons';
import { LogoRed } from '@public/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="padding__x absolute z-20 w-full py-8">
      <nav className="max__wrapper flex items-center justify-between">
        <Link className="rounded-md outline-offset-8 outline-accent" href="/">
          <Image
            src={LogoRed}
            alt="Nike, Accueil."
            width={104}
            height={40}
            priority
          />
        </Link>
        <ul className="mr-8 flex flex-1 items-center justify-end gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                className="rounded-sm font-montserrat text-lg leading-normal text-gray underline-offset-2 outline-offset-8 outline-accent transition-colors hover:text-accent hover:underline"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="inline-block rounded-sm outline-offset-8 outline-accent lg:hidden"
          type="button"
          aria-controls="navigation"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Menu</span>
          {isMenuOpen ? (
            <Image src={Close} alt="" width={40} height={40} />
          ) : (
            <Image src={Hamburger} alt="" width={40} height={40} />
          )}
        </button>
        {isMenuOpen && (
          <ul
            className="absolute right-0 top-24 flex w-full flex-col gap-6 bg-accent px-8 py-8 lg:hidden"
            id="navigation"
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="flex-start rounded-sm font-montserrat text-lg leading-normal text-white outline-offset-8 outline-white"
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
