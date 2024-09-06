import {
  facebook,
  instagram,
  shield,
  support,
  truck,
  twitter,
} from '@public/assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe1,
  shoe2,
  shoe3,
  shoe4,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '@public/assets/images';

export const navLinks = [
  { href: '#home', label: 'Accueil' },
  { href: '#products', label: 'Produits' },
  { href: '#about', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
];

export const statistics = [
  { value: '1k+', label: 'Marques' },
  { value: '500+', label: 'Boutiques' },
  { value: '250k+', label: 'Clients' },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
    alt: 'baskets beige avec talons bordeaux, semelle blanche et lacets blancs.',
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
    alt: 'baskets marron clair avec semelle blanche.',
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
    alt: 'baskets noires et bleues avec semelle noire et blanche.',
  },
];

export const products = [
  {
    imgURL: shoe1,
    rating: '4.7',
    alt: 'baskets bordeaux et blanches.',
    name: 'Nike Dunk Low',
    price: '129,99€',
  },
  {
    imgURL: shoe2,
    alt: 'baskets noires avec des accents rouges.',
    rating: '4.2',
    name: 'Giannis Immortality 3',
    price: '89,99€',
  },
  {
    imgURL: shoe3,
    rating: '4.9',
    alt: 'baskets marron foncé.',
    name: 'Nike Cortez Textile',
    price: '89,99€',
  },
  {
    imgURL: shoe4,
    rating: '4.7',
    alt: 'baskets gris olive.',
    name: 'Nike Air Max 90',
    price: '159,99€',
  },
];

export const services = [
  {
    imgURL: truck,
    title: 'Expédition gratuite',
    subtext:
      'Profitez d’une expérience de shopping fluide avec notre service de livraison gratuit.',
  },
  {
    imgURL: shield,
    title: 'Paiement sécurisé',
    subtext:
      'Effectuez vos transactions en toute tranquillité avec nos options de paiement sécurisé.',
  },
  {
    imgURL: support,
    title: 'Nous adorons vous aider',
    subtext: 'Notre équipe dévouée est là pour vous assister à chaque étape.',
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Antoine Dubois',
    rating: 4.5,
    feedback:
      'L’attention portée aux détails et la qualité du produit ont dépassé mes attentes. Je recommande vivement !',
  },
  {
    imgURL: customer2,
    customerName: 'Claire Lefèvre',
    rating: 4.9,
    feedback:
      'Le produit a non seulement répondu, mais a dépassé mes attentes. Je serai certainement une cliente fidèle !',
  },
];

export const socialMedia = [
  { src: facebook, alt: 'Facebook.', href: '#' },
  { src: twitter, alt: 'Twitter', href: '#' },
  { src: instagram, alt: 'Instagram', href: '#' },
];

export const footerLinks = [
  {
    title: 'Produits',
    links: [
      { name: 'Air Force', href: '#' },
      { name: 'Air Max', href: '#' },
      { name: 'Air Jordan', href: '#' },
      { name: 'Nike Waffle Racer', href: '#' },
      { name: 'Nike Cortez', href: '#' },
    ],
  },
  {
    title: 'Aide',
    links: [
      { name: 'À propos de nous', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Comment ça marche', href: '#' },
      { name: 'Politique de confidentialité', href: '#' },
      { name: 'Politique de paiement', href: '#' },
    ],
  },
  {
    title: 'Contactez-nous',
    links: [
      { name: 'contact@nike.com', href: '#' },
      { name: '+123456789', href: 'tel:+123456789' },
    ],
  },
];
