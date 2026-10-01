import {
  type CutType,
  type DetailsImage,
  type PropsEssential,
  type NavbarMenu,
  type Staff,
  type Review,
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
    type: "HAIRCUTS",
    cuts: [
      {
        name: "PRECISION HAIRCUTS",
        description: "Consultation, wash, cut and considered styling.",
        price: 25,
        time: 45,
      },
      {
        name: "SIGNATURE FADE",
        description: "Seamless skin fade with a tailored finish.",
        price: 28,
        time: 50,
      },
      {
        name: "SCISSOR CUT",
        description: "Shape and movement built entirely by hand.",
        price: 30,
        time: 50,
      },
    ],
  },
  {
    id: 2,
    type: "BEARD",
    cuts: [
      {
        name: "BEARD DESIGN",
        description: "Beard trim, precise shaping and finish.",
        price: 15,
        time: 25,
      },
      {
        name: "BEARD RITUAL",
        description: "Hot towel, shape, detail and conditioning.",
        price: 22,
        time: 35,
      },
    ],
  },
  {
    id: 3,
    type: "COMBINATIONS",
    cuts: [
      {
        name: "FULL GROOMING",
        description: "Haircut, beard shaping and complete styling.",
        price: 35,
        time: 60,
      },
      {
        name: "THE NOIR SESSION",
        description: "Our complete cut, beard and care ritual.",
        price: 45,
        time: 75,
      },
    ],
  },
  {
    id: 4,
    type: "EXTRAS",
    cuts: [
      {
        name: "CLEAN FINISH",
        description: "Neckline, contours and styling refresh.",
        price: 12,
        time: 20,
      },
      {
        name: "GREY BLENDING",
        description: "Natural tonal blending for hair or beard.",
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
  { name: "HOME", path: "/home" },
  { name: "SERVICE", path: "/service" },
  { name: "ABOUT", path: "/about" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTATTI", path: "/contatti" },
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

export const reviews: Review[] = [
  {
    id: 1,
    name: "Luca Bianchi",
    rating: 5,
    ratingText: "Excellent",
    review:
      "Esperienza fantastica. Ambiente elegante e personale molto professionale.",
  },
  {
    id: 2,
    name: "Marco Rossi",
    rating: 5,
    ratingText: "Excellent",
    review:
      "Finalmente ho trovato il mio barbiere di fiducia. Grande attenzione ai dettagli.",
  },
  {
    id: 3,
    name: "Andrea Moretti",
    rating: 4,
    ratingText: "Very Good",
    review:
      "Locale davvero curato e atmosfera piacevole. Il taglio è stato fatto con grande precisione.",
  },
  {
    id: 4,
    name: "Davide Romano",
    rating: 5,
    ratingText: "Excellent",
    review: "Servizio eccellente dall'inizio alla fine. Tornerò sicuramente.",
  },
  {
    id: 5,
    name: "Matteo Ferri",
    rating: 5,
    ratingText: "Excellent",
    review:
      "Qualità, professionalità e attenzione ai dettagli. Consigliatissimo.",
  },
];
