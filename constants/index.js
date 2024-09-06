import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
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
