import {
  type CutType,
  type DetailsImage,
  type PropsEssential,
  type NavbarMenu,
  type Staff,
} from "./interface";

// Image import

import image2 from "../assets/img/craft-hands.jpg";
import image1 from "../assets/img/gallery-beard.jpg";
import image3 from "../assets/img/gallery-studio.jpg";
import image4 from "../assets/img/gallery-tools.jpg";
import image5 from "../assets/img/gallery-fade.jpg";

import alex from "../assets/img/team-alex.jpg";
import david from "../assets/img/team-david.jpg";

export const typeCuts: CutType[] = [
  {
    id: 1,
    translationKey: "service.cuts.services.1.haircuts",
    cuts: [
      {
        id: 1,
        price: 25,
        time: 45,
      },
      {
        id: 2,
        price: 28,
        time: 50,
      },
      {
        id: 3,
        price: 30,
        time: 50,
      },
    ],
  },
  {
    id: 2,
    translationKey: "service.cuts.services.2.haircuts",
    cuts: [
      {
        id: 1,
        price: 15,
        time: 25,
      },
      {
        id: 2,
        price: 22,
        time: 35,
      },
    ],
  },
  {
    id: 3,
    translationKey: "service.cuts.services.3.haircuts",
    cuts: [
      {
        id: 1,
        price: 35,
        time: 60,
      },
      {
        id: 2,
        price: 45,
        time: 75,
      },
    ],
  },
  {
    id: 4,
    translationKey: "service.cuts.services.4.haircuts",
    cuts: [
      {
        id: 1,
        price: 12,
        time: 20,
      },
      {
        id: 2,
        price: 20,
        time: 30,
      },
    ],
  },
];

export const img_details: DetailsImage[] = [
  {
    src: image1,
    title: "FADE",
    className: "col-span-1 row-span-2",
  },
  {
    src: image2,
    title: "BEARD",
    className: "col-span-1 row-span-1",
  },
  {
    src: image3,
    title: "STUDIO",
    className: "col-span-2 row-span-1",
  },
  {
    src: image4,
    title: "HAIRCUT",
    className: "col-span-1 row-span-1",
  },
  {
    src: image5,
    title: "DETAIL",
    className: "col-span-2 row-span-1",
  },
];

export const Essential_props: PropsEssential[] = [
  {
    number: "01",
    h3: "PRECISION HAIRCUT",
    p: "Consultation, wash, cut and considered styling.",
    span: "45 min / €25",
  },
  {
    number: "02",
    h3: "SIGNATURE FADE",
    p: "Seamless skin fade with a tailored finish.",
    span: "50 min / €28",
  },
  {
    number: "03",
    h3: "SCISSOR CUT",
    p: "Shape and movement built entirely by hand.",
    span: "50 min / €30",
  },
];

export const menu_navbar: NavbarMenu[] = [
  { translationKey: "nav.home", path: "/home" },
  { translationKey: "nav.service", path: "/service" },
  { translationKey: "nav.about", path: "/about" },
  { translationKey: "nav.gallery", path: "/gallery" },
  { translationKey: "nav.contact", path: "/contatti" },
];

export const staff: Staff[] = [
  {
    name: "ALEX MORETTI",
    role: "MASTER BABER",
    skill: "Fade & Modern Cut",
    image: alex,
  },
  {
    name: "DAVID ROMANO",
    role: "BABER",
    skill: "Clssic Cuts & Beard",
    image: david,
  },
];

export type Review = {
  id: number;
  name: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Luca Bianchi",
    rating: 5,
  },
  {
    id: 2,
    name: "Marco Rossi",
    rating: 5,
  },
  {
    id: 3,
    name: "Andrea Moretti",
    rating: 4,
  },
  {
    id: 4,
    name: "Davide Romano",
    rating: 5,
  },
  {
    id: 5,
    name: "Matteo Ferri",
    rating: 5,
  },
];
