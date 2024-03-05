import { CarouselHome } from '../components/CarouselHome';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

export function Home() {
  const { data, isLoading } = useProducts();

  return (
    <main className="max-w-screen-lg mx-auto lg:px-5">
      <CarouselHome />
      <section className="p-5 lg:px-0">
        <h2 className="py-5 text-2xl font-bold">Catálogo de productos</h2>
        <section className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {isLoading && <div>Loading...</div>}
          {data?.slice(0, 8)?.map((product) => (
            <ProductCard
              key={product.id}
              image={product.imagen}
              brand={product.marca}
              title={product.descrip}
              price={parseFloat(product.precio)}
            />
          ))}
        </section>
      </section>
      <a
        href="#"
        className="flex items-center justify-center px-3 py-2 mx-auto font-bold text-white transition duration-300 bg-black rounded-md w-60 hover:bg-zinc-900"
      >
        Ver todo
      </a>
    </main>
  );
}
