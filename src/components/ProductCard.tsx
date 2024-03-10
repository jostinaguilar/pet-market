import { useCartStore } from '../store/useCartStore';
import { CartIcon } from './ui/Icons';

const URL_IMAGES = 'https://ventas.vetmarket.pe/';

interface Props {
  brand: string;
  title: string;
  price: number;
  image: string;
}

export function ProductCard({ brand, title, price, image }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <article className="flex flex-col justify-between p-3 bg-white border border-zinc-100 rounded-xl hover:shadow-md">
      <picture className="flex bg-white rounded-lg sm:p-2">
        <img
          src={`${URL_IMAGES}${image}`}
          alt=""
          className="w-full h-full aspect-square"
        />
      </picture>
      <div className="flex flex-col gap-2 pt-4 rounded-b-lg">
        <span className="text-xs font-bold capitalize text-secondary-600">
          {brand}
        </span>
        <h4 className="h-12 text-sm font-medium leading-4 sm:h-8 line-clamp-3 xs:line-clamp-3">
          {title}
        </h4>
        <p className="text-base font-black text-primary-600">
          {new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN',
          }).format(price)}
        </p>
      </div>
      <button
        type="button"
        className="flex flex-row items-center self-end justify-center w-full gap-1.5 py-1 font-bold text-white transition duration-300 rounded-lg bg-primary-600 hover:bg-black mt-2"
        onClick={() => addToCart({})}
      >
        <span className="hidden sm:block">
          <CartIcon />
        </span>
        Agregar
      </button>
    </article>
  );
}
