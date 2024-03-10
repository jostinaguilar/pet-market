import {
  InstagramIcon,
  PlaneIcon,
  TiktokIcon,
  WhatsappIcon,
  XIcon,
} from './ui/Icons';

export function Footer() {
  return (
    <footer className="mt-10 text-white bg-zinc-800">
      <section className="flex flex-col justify-between max-w-screen-lg gap-4 p-5 mx-auto sm:flex-wrap sm:flex-row lg:flex-nowrap">
        <article className="flex flex-row gap-2 sm:w-2/5 lg:w-auto">
          <img src="/src/assets/more/truck.svg" alt="Envíos gratis" />
          <div>
            <h6 className="text-base font-bold text-white">Envíos gratis</h6>
            <p className="-mt-0.5 text-xs text-zinc-300">
              Envíos gratis en todas tus compras
            </p>
          </div>
        </article>
        <article className="flex flex-row gap-2 sm:w-2/5 lg:w-auto">
          <img src="/src/assets/more/box.svg" alt="Productos Exclusivos" />
          <div>
            <h6 className="text-base font-bold text-white">
              Productos Exclusivos
            </h6>
            <p className="-mt-0.5 text-xs text-zinc-300">
              Productos exclusivos en Pet Market
            </p>
          </div>
        </article>
        <article className="flex flex-row gap-2 sm:w-2/5 lg:w-auto">
          <img src="/src/assets/more/chat.svg" alt="Whatsapp" />
          <div>
            <h6 className="text-base font-bold text-white">Whatsapp</h6>
            <p className="-mt-0.5 text-xs text-zinc-300">
              Escríbenos (+51) 975 488 535
            </p>
          </div>
        </article>
        <article className="flex flex-row gap-2 sm:w-2/5 lg:w-auto">
          <img src="/src/assets/more/pay.svg" alt="Pago seguro" />
          <div>
            <h6 className="text-base font-bold text-white">Pago seguro</h6>
            <p className="-mt-0.5 text-xs text-zinc-300">
              Pagos cifrados y seguros
            </p>
          </div>
        </article>
      </section>
      <hr className="border-zinc-600" />
      <section className="flex flex-col justify-between max-w-screen-lg gap-8 px-5 py-8 mx-auto lg:flex-row">
        <section className="flex flex-col items-center w-full gap-2 lg:items-start lg:max-w-72">
          <h4 className="text-2xl font-black">Pet Market</h4>
          <p className="text-sm text-zinc-400">
            Suscríbete a nuestro newsletter
          </p>
          <form
            action="#"
            className="relative flex items-center w-full max-w-96"
          >
            <input
              type="text"
              placeholder="Ingresa tu email"
              className="w-full px-3 py-2 text-sm text-white rounded-md bg-zinc-700 placeholder:text-zinc-500"
            />
            <button
              type="submit"
              className="absolute rotate-90 right-2 text-zinc-500"
            >
              <PlaneIcon />
              <span className="sr-only">Enviar</span>
            </button>
          </form>
        </section>
        <section className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <h5 className="font-bold text-white">Soporte</h5>
            <ul className="flex flex-col items-center gap-1 text-sm text-zinc-400 sm:items-start">
              <li>Av. United States 1515, Lima, Perú</li>
              <li>support@techstore.com</li>
              <li>+51 987 123 123</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <h5 className="font-bold text-white">Mi cuenta</h5>
            <ul className="flex flex-col items-center gap-1 text-sm text-zinc-400 sm:items-start">
              <li>Iniciar Sesión</li>
              <li>Registrarse</li>
              <li>Mi Perfil</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <h5 className="font-bold text-white">Legal</h5>
            <ul className="flex flex-col items-center gap-1 text-sm text-zinc-400 sm:items-start">
              <li>Condiciones de uso</li>
              <li>Política de privacidad</li>
              <li>Preguntas frecuentes</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <h5 className="font-bold text-white">Sobre nosotros</h5>
            <ul className="flex flex-col items-center gap-1 text-sm text-zinc-400 sm:items-start">
              <li>Quiénes somos</li>
            </ul>
          </div>
        </section>
      </section>
      <section className="flex flex-col items-center justify-between w-full max-w-screen-lg gap-4 p-5 mx-auto sm:flex-row">
        <span className="text-xs text-zinc-500 sm:text-sm">
          ©Pet Market. Todos los derechos reservados.
        </span>
        <ul className="flex flex-row gap-4 text-zinc-500">
          <li>
            <InstagramIcon />
          </li>
          <li>
            <WhatsappIcon />
          </li>
          <li>
            <XIcon />
          </li>
          <li>
            <TiktokIcon />
          </li>
        </ul>
      </section>
    </footer>
  );
}
