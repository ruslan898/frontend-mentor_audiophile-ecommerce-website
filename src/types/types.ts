export type ImagePaths = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type OtherProduct = {
  image: ImagePaths;
  name: string;
  slug: string;
};

export type Product = {
  category: 'earphones' | 'headphones' | 'speakers';
  categoryImage: ImagePaths;
  description: string;
  features: string;
  gallery: {
    first: ImagePaths;
    second: ImagePaths;
    third: ImagePaths;
  };
  id: number;
  image: ImagePaths;
  includes: { item: string; quantity: number }[];
  name: string;
  new: boolean;
  others: OtherProduct[];
  price: number;
  slug: string;
};

