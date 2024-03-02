import { useCategories } from '../hooks/useCategories';
import { CloseIcon } from './ui/Icons';
import { ItemMenu } from './ui/ItemMenu';

export function Navigation() {
  const { data, isLoading } = useCategories();

  return (
    <>
      <nav className="fixed inset-0 z-10 overflow-hidden overflow-y-scroll bg-white w-72">
        <div className="sticky top-0 flex flex-row items-center justify-between p-5 text-white bg-pumpkin-700">
          <h2 className="text-2xl font-black lg:text-3xl">Pet Market</h2>
          <button type="button">
            <CloseIcon />
          </button>
        </div>
        {isLoading && <div>Loading...</div>}
        <ul className="flex flex-col items-start w-full max-w-screen-lg gap-4 px-5 py-4 mx-auto lg:justify-between lg:flex-row">
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
      <div className="fixed inset-0 bg-black/40 backdrop-blur-[1px]"></div>
    </>
  );
}
