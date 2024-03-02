import { CartIcon, MenuIcon, SearchIcon, UserIcon } from './ui/Icons';

export function Navbar() {
  return (
    <nav className="w-full bg-pumpkin-700">
      <ul className="flex flex-row flex-wrap items-center justify-between max-w-screen-lg gap-4 px-5 py-4 mx-auto lg:gap-10">
        <li className="order-1">
          <div className="flex flex-row items-center gap-2 text-white">
            <span className="lg:hidden">
              <MenuIcon />
            </span>
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
              className="w-full py-2 pl-3 pr-10 text-white transition duration-300 border border-transparent rounded-md outline-none bg-white/10 border-pumpkin-400 focus:shadow-md placeholder:text-white/75"
              name="query"
              autoComplete="off"
            />
            <button type="submit" className="absolute text-white right-3">
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
            <span className="link-nav">Cart (0)</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
