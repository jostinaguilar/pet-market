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
    <li className="w-full">
      <a
        href="#"
        className="flex flex-row items-center justify-between"
        onClick={handleToggleMenu}
      >
        <div className="flex flex-row items-center gap-3 text-sm font-bold lg:flex-col">
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
              'rotate-0 text-pumpkin-600 transform duration-300 transition',
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
        <ul className="mt-2">
          {submenu.map((subitem) => (
            <li key={subitem.id} className="w-full pl-9">
              <a
                href="#"
                className="inline-flex w-full py-1.5 text-xs items-center justify-between font-semibold text-zinc-800"
                onClick={handleToggleSubmenu}
              >
                {subitem.nom}
                {subitem.sub_menus.length > 0 && (
                  <span
                    className={clsx(
                      'inline-flex w-5 mr-1 transform duration-300 transition text-zinc-500',
                      {
                        'rotate-90': openSubmenu,
                      }
                    )}
                  >
                    <ChevronRightIcon />
                  </span>
                )}
              </a>
              {openSubmenu && subitem.sub_menus.length > 0 && (
                <ul>
                  {subitem.sub_menus.map((item: CategoriesType) => (
                    <li key={item.id}>
                      <a href="#" className="pl-5 text-xs">
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
