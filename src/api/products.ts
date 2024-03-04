import { Products } from '../types/types';

const API_URL = 'https://ventas.vetmarket.pe/data/productos.php';

export async function fetchProducts() {
  const res = await fetch(API_URL);
  const data: Array<Products> = await res.json();

  return data;
}
