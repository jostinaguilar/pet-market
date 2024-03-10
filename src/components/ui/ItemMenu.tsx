import { clsx } from 'clsx';
import { useState } from 'react';
import { CategoriesType } from '../../types/types';
import { ChevronRightIcon } from './Icons';

interface Props {
  name: string;
  submenu: Array<CategoriesType>;
}

export function ItemMenu({ name, submenu }: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleToggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <li className="w-full lg:w-auto lg:relative">
      <a
        href="#"
        className="flex flex-row items-center justify-between"
        onClick={handleToggleMenu}
      >
        <div className="flex flex-row items-center gap-3 text-sm font-bold lg:flex-col lg:gap-1">
          <img
            src={`/src/assets/categories/${name}.svg`}
            alt={name}
            className="w-6"
          />
          {name}
        </div>
        {submenu.length > 0 && (
          <span
            className={clsx(
              'rotate-0 text-primay-600 duration-200 transition lg:hidden',
              {
                'rotate-90': openMenu,
              }
            )}
          >
            <ChevronRightIcon />
          </span>
        )}
      </a>
      {openMenu && submenu.length > 0 && (
        <ul
          className={clsx(
            'mt-2 lg:bg-gray-50 lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:py-2 lg:px-6 lg:rounded-lg',
            {
              'lg:flex lg:gap-4': submenu.some(
                (el) => el.sub_menus.length != 0
              ),
            }
          )}
        >
          {submenu.map((subitem) => (
            <li key={subitem.id} className="w-full pl-9 lg:pl-0">
              <a
                href="#"
                className="inline-flex w-full py-1.5 text-xs items-center justify-between font-semibold text-zinc-800 hover:text-primay-500 transition duration-300 text-nowrap"
                onClick={handleToggleSubmenu}
              >
                {subitem.nom}
                {subitem.sub_menus.length > 0 && (
                  <span
                    className={clsx(
                      'inline-flex w-5 mr-1 duration-200 transition text-zinc-500 lg:hidden',
                      {
                        'rotate-90': openSubmenu,
                      }
                    )}
                  >
                    <ChevronRightIcon />
                  </span>
                )}
              </a>
              {subitem.sub_menus.length > 0 && (
                <ul
                  className={clsx('lg:block', {
                    hidden: !openSubmenu,
                    block: openSubmenu,
                  })}
                >
                  {subitem.sub_menus.map((item: CategoriesType) => (
                    <li key={item.id}>
                      <a
                        href="#"
                        className="pl-5 text-xs lg:pl-0 hover:text-secondary-500"
                      >
                        {item.nom}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
