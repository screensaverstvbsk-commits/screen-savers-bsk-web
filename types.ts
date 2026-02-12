
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  brands: string[];
}

export interface Brand {
  name: string;
  logo: string;
  description: string;
  specialty: string;
}

export interface Area {
  name: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
