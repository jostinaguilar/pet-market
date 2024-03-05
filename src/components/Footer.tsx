import {
  InstagramIcon,
  PlaneIcon,
  TiktokIcon,
  WhatsappIcon,
  XIcon,
} from './ui/Icons';

export function Footer() {
  return (
    <footer className="mt-10 text-white bg-zinc-950">
      <section className="flex flex-col justify-between max-w-screen-lg gap-2 p-5 mx-auto lg:flex-row">
        <article className="flex flex-row gap-2">
          <img src="/src/assets/more/truck.svg" alt="Envíos gratis" />
          <div>
            <h6 className="text-base font-bold text-white">Envíos gratis</h6>
            <p className="-mt-0.5 text-xs text-zinc-300">
              Envíos gratis en todas tus compras
            </p>
          </div>
        </article>
        <article className="flex flex-row gap-2">
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
        <article className="flex flex-row gap-2">
          <img src="/src/assets/more/chat.svg" alt="Whatsapp" />
          <div>
            <h6 className="text-base font-bold text-white">Whatsapp</h6>
            <p className="-mt-0.5 text-xs text-zinc-300">
              Escríbenos (+51) 975 488 535
            </p>
          </div>
        </article>
        <article className="flex flex-row gap-2">
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
      <section className="flex flex-col justify-between max-w-screen-lg gap-4 px-5 py-8 mx-auto lg:flex-row">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl font-black">Pet Market</h4>
          <p className="text-sm text-zinc-400">
            Suscríbete a nuestro newsletter
          </p>
          <form action="#" className="relative flex items-center">
            <input
              type="text"
              placeholder="Ingresa tu email"
              className="w-full px-2 py-2 text-sm text-white rounded-md bg-zinc-900 placeholder:text-zinc-500"
            />
            <button
              type="submit"
              className="absolute rotate-90 right-2 text-zinc-700"
            >
              <PlaneIcon />
              <span className="sr-only">Enviar</span>
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold text-white">Soporte</h5>
          <ul className="flex flex-col gap-1 text-sm text-zinc-400">
            <li>Av. United States 1515, Lima, Perú</li>
            <li>support@techstore.com</li>
            <li>+51 987 123 123</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold text-white">Mi cuenta</h5>
          <ul className="flex flex-col gap-1 text-sm text-zinc-400">
            <li>Iniciar Sesión</li>
            <li>Registrarse</li>
            <li>Mi Perfil</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold text-white">Legal</h5>
          <ul className="flex flex-col gap-1 text-sm text-zinc-400">
            <li>Condiciones de uso</li>
            <li>Política de privacidad</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold text-white">Sobre nosotros</h5>
          <ul className="flex flex-col gap-1 text-sm text-zinc-400">
            <li>Quiénes somos</li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col justify-between w-full max-w-screen-lg p-5 mx-auto lg:flex-row">
        <span className="text-sm text-zinc-500">
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
