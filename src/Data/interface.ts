interface Cut {
  id: number;
  price: number;
  time: number;
}

export interface CutType {
  id: number;
  translationKey: string;
  cuts: Cut[];
}

export interface DetailsImage {
  id: string;
  src: string;
  title: string;
  className: string;
}

export interface PropsEssential {
  number: string;
  h3: string;
  p: string;
  span: string;
}

export interface NavbarMenu {
  translationKey: string;
  path: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  skill: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
