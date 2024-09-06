'use client';

import { navLinks } from '@constants';
import { close, hamburger } from '@public/assets/icons';
import { logoRed } from '@public/assets/images';
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
        <Link
          className="rounded-full px-2 py-1 outline-offset-8 outline-accent"
          href="/"
        >
          <Image
            src={logoRed}
            alt="Nike, Accueil."
            width={104}
            height={40}
            priority
          />
        </Link>
        <ul className="mr-8 flex flex-1 items-center justify-end gap-8 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="flex__center rounded-full bg-gray px-8 py-4 text-white outline-offset-8 outline-accent transition-colors hover:bg-accent"
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
            <Image src={close} alt="" width={40} height={40} />
          ) : (
            <Image src={hamburger} alt="" width={40} height={40} />
          )}
        </button>
        {isMenuOpen && (
          <ul
            className="absolute right-0 top-24 flex w-full flex-col gap-6 bg-accent px-8 py-8 lg:hidden"
            id="navigation"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="flex-start rounded-sm text-lg leading-normal text-white outline-offset-8 outline-white"
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
