import { CartIcon, MenuIcon, SearchIcon, UserIcon } from './ui/Icons';

export function Navbar() {
  return (
    <nav className="w-full bg-pumpkin-500">
      <ul className="flex-wrap flex-row flex max-w-screen-lg mx-auto px-5 py-6 justify-between items-center gap-4 lg:gap-10">
        <li className="order-1">
          <div className="flex flex-row gap-2 items-center text-white">
            <span className="lg:hidden">
              <MenuIcon />
            </span>
            <h2 className="font-black text-2xl lg:text-3xl">Pet Market</h2>
          </div>
        </li>
        <li className="w-full order-4 lg:order-2 lg:flex-1">
          <form
            method="get"
            className="w-full flex flex-row relative items-center"
          >
            <input
              type="text"
              placeholder="Buscar productos"
              className="outline-none w-full pl-3 pr-10 py-2 bg-white/10 rounded-md border border-transparent border-pumpkin-400 focus:shadow-md text-white placeholder:text-white/75 transition duration-300"
              name="query"
              autoComplete="off"
            />
            <button type="submit" className="absolute right-3 text-white">
              <SearchIcon />
            </button>
          </form>
        </li>
        <li className="hidden order-3 lg:block">
          <div className="flex flex-row items-center text-white">
            <UserIcon />
            <a href="#" className="link-nav">
              Iniciar sesión
            </a>
            <span aria-hidden="true" className="text-3xl mx-2">
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
            className="flex flex-row gap-1 text-white text-sm font-semibold items-center"
          >
            <CartIcon />
            <span className="link-nav">Cart (0)</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
