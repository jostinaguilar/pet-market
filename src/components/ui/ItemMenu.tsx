import { CategoriesType } from '../../types/types';
import { ChevronRightIcon } from './Icons';

interface Props {
  name: string;
  submenu: Array<CategoriesType>;
}

export function ItemMenu({ name, submenu }: Props) {
  return (
    <li className="w-full">
      <a href="#" className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3 text-sm font-bold lg:flex-col">
          <img
            src={`/src/assets/categories/${name}.svg`}
            alt={name}
            className="w-6"
          />
          {name}
        </div>
        {submenu.length > 0 && (
          <span className="text-pumpkin-600">
            <ChevronRightIcon />
          </span>
        )}
      </a>
      {submenu.length > 0 && (
        <ul className="mt-2">
          {submenu.map((subitem) => (
            <li key={subitem.id} className="w-full pl-9">
              <a
                href="#"
                className="inline-flex w-full py-1.5 text-xs items-center justify-between font-semibold text-zinc-800"
              >
                {subitem.nom}
                {subitem.sub_menus.length > 0 && (
                  <span className="inline-flex w-5 text-zinc-500">
                    <ChevronRightIcon />
                  </span>
                )}
              </a>
              {subitem.sub_menus.length > 0 && (
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
