import { ProductType } from '../types/types';

const API_URL = 'https://ventas.vetmarket.pe/data/productos.php';

export async function fetchProducts() {
  const res = await fetch(API_URL);
  const data: Array<ProductType> = await res.json();

  return data;
}
