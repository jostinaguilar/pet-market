import clsx from 'clsx';
import { useCategories } from '../hooks/useCategories';
import { useSideMenu } from '../store/useSideMenu';
import { CloseIcon } from './ui/Icons';
import { ItemMenu } from './ui/ItemMenu';

export function Navigation() {
  const sideMenu = useSideMenu((state) => state.sideMenu);
  const closeSideMenu = useSideMenu((state) => state.closeSideMenu);
  const { data, isLoading } = useCategories();

  return (
    <>
      <nav
        className={clsx(
          'z-10 fixed inset-0 overflow-hidden overflow-y-scroll bg-white w-72 -translate-x-full transition duration-500 lg:translate-x-0 lg:overflow-visible lg:w-full lg:static',
          {
            'translate-x-0': sideMenu === true,
          }
        )}
      >
        <div className="sticky top-0 flex flex-row items-center justify-between p-5 text-white bg-primary-700 lg:hidden">
          <h2 className="text-2xl font-black lg:text-3xl">Pet Market</h2>
          <button onClick={closeSideMenu} type="button">
            <CloseIcon />
          </button>
        </div>
        {isLoading && <div>Loading...</div>}
        <ul className="flex flex-col items-start w-full max-w-screen-lg gap-4 px-5 py-4 mx-auto lex lg:justify-between lg:flex-row lg:items-center">
          {!isLoading &&
            data?.map((category) => (
              <ItemMenu
                key={category.id}
                name={category.nom}
                submenu={category.sub_menus}
              />
            ))}
        </ul>
      </nav>
      {sideMenu && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-0"></div>
      )}
    </>
  );
}
