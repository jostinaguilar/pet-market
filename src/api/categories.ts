import { CategoriesType } from '../types/types';

const API_URL = 'https://ventas.vetmarket.pe/data/categorias.php';

export async function fetchCategories() {
  const res = await fetch(API_URL);
  const data: Array<CategoriesType> = await res.json();
  return data;
}
