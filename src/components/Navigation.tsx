import { useCategories } from '../hooks/useCategories';
import { ItemMenu } from './ui/ItemMenu';

export function Navigation() {
  const { data, isLoading } = useCategories();

  return (
    <nav className="">
      {isLoading && <div>Loading...</div>}
      <ul className="w-full max-w-screen-lg py-4 px-5 flex flex-row mx-auto justify-between">
        {!isLoading &&
          data?.map((category) => (
            <ItemMenu key={category.id} name={category.nom} />
          ))}
      </ul>
    </nav>
  );
}
