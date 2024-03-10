import { CategoryType } from '../types/types';

const API_URL = 'https://ventas.vetmarket.pe/data/categorias.php';

export async function fetchCategories() {
  const res = await fetch(API_URL);
  const data: Array<CategoryType> = await res.json();
  return data;
}
