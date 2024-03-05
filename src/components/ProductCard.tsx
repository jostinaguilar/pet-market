import { CartIcon } from './ui/Icons';

const URL_IMAGES = 'https://ventas.vetmarket.pe/';

interface Props {
  brand: string;
  title: string;
  price: number;
  image: string;
}

export function ProductCard({ brand, title, price, image }: Props) {
  return (
    <article className="flex flex-col justify-between p-3 border rounded-xl border-zinc-200 bg-zinc-50 hover:shadow-md">
      <picture className="flex bg-white rounded-lg sm:p-4">
        <img
          src={`${URL_IMAGES}${image}`}
          alt=""
          className="w-full h-full aspect-square"
        />
      </picture>
      <div className="flex flex-col gap-2 pt-4 rounded-b-lg">
        <span className="text-xs font-bold capitalize text-blue-chill-500">
          {brand}
        </span>
        <h4 className="h-12 text-sm font-medium leading-4 sm:h-8 line-clamp-3 xs:line-clamp-3">
          {title}
        </h4>
        <p className="text-base font-black text-pumpkin-600">
          {new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN',
          }).format(price)}
        </p>
      </div>
      <button
        type="button"
        className="flex flex-row items-center self-end justify-center w-full gap-1.5 py-1 font-bold text-white transition duration-300 rounded-lg bg-pumpkin-600 hover:bg-pumpkin-500 mt-2"
      >
        <span className="hidden sm:block">
          <CartIcon />
        </span>
        Agregar
      </button>
    </article>
  );
}
