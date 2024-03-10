export interface CategoryType {
  id: string;
  nom: string;
  descrip: Descrip;
  imagen: string;
  nivel: string;
  cat: string;
  sub_menus?: Array;
}

export interface ProductType {
  id: string;
  marca: string;
  descrip: string;
  precio: string;
  cat: string;
  imagen: string;
}
