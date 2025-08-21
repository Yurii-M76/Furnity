export type TProduct = {
  id: string;
  label: string;
  category: productCategory;
  image: string;
  price: number;
};

export enum productCategory {
  CHAIR = "Chair",
  TABLE = "Table",
  SOFA = "Sofa",
  KITCHEN = "Kitchen"
}
