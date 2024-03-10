import { useCartStore } from '../store/useCartStore';
import { useSideMenu } from '../store/useSideMenu';
import { CartIcon, MenuIcon, SearchIcon, UserIcon } from './ui/Icons';

export function Navbar() {
  const openSideMenu = useSideMenu((state) => state.openSideMenu);
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="w-full bg-primary-700">
      <ul className="flex flex-row flex-wrap items-center justify-between max-w-screen-lg gap-4 px-5 py-6 mx-auto lg:gap-10">
        <li className="order-1">
          <div className="flex flex-row items-center gap-2 text-white">
            <button onClick={openSideMenu} type="button" className="lg:hidden">
              <MenuIcon />
            </button>
            <h2 className="text-2xl font-black lg:text-3xl">Pet Market</h2>
          </div>
        </li>
        <li className="order-4 w-full lg:order-2 lg:flex-1">
          <form
            method="get"
            className="relative flex flex-row items-center w-full"
          >
            <input
              type="text"
              placeholder="Buscar productos"
              className="w-full py-2.5 pl-3 pr-10 text-sm transition duration-300 bg-white border border-transparent rounded-md outline-none text-zinc-800 focus:shadow-md placeholder:text-zinc-400"
              name="query"
              autoComplete="off"
            />
            <button type="submit" className="absolute text-primary-600 right-3">
              <SearchIcon />
            </button>
          </form>
        </li>
        <li className="order-3 hidden lg:block">
          <div className="flex flex-row items-center text-white">
            <UserIcon />
            <a href="#" className="link-nav">
              Iniciar sesión
            </a>
            <span aria-hidden="true" className="mx-2 text-3xl">
              ·
            </span>
            <a href="#" className="link-nav">
              Registrarse
            </a>
          </div>
        </li>
        <li className="order-2 lg:order-4">
          <button
            type="button"
            className="flex flex-row items-center gap-1 text-sm font-semibold text-white"
          >
            <CartIcon />
            <span className="link-nav">Cart ({`${cart.length}`})</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
