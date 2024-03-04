import { CarouselHome } from '../components/CarouselHome';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

export function Home() {
  const { data, isLoading } = useProducts();

  return (
    <main className="max-w-screen-lg mx-auto lg:px-5">
      <CarouselHome />
      <section className="py-5">
        <h2 className="py-5 text-2xl font-bold">Catálogo de productos</h2>
        <section className="grid grid-cols-4 gap-5">
          {isLoading && <div>Loading...</div>}
          {data?.slice(0, 8)?.map((product) => (
            <ProductCard
              key={product.id}
              image={product.imagen}
              brand={product.marca}
              title={product.descrip}
              price={product.precio}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
