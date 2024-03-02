export interface CategoriesType {
  id: string;
  nom: string;
  descrip: Descrip;
  imagen: string;
  nivel: string;
  cat: string;
  sub_menus?: Categories[];
}

export interface Products {
  id: string;
  marca: string;
  descrip: string;
  precio: string;
  cat: string;
  imagen: string;
}
