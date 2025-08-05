export type TProduct = {
  id: string;
  label: string;
  category: productCategory;
  image: string;
  price: number;
};

export enum productCategory {
  CHAIRS = "стулья",
  TABLES = "столы",
  SOFAS = "диваны",
}
