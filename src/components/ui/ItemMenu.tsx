interface Props {
  name: string;
}

export function ItemMenu({ name }: Props) {
  return (
    <li>
      <div className="flex flex-col items-center">
        <img src={`/src/assets/categories/${name}.svg`} alt={name} />
        <a href="#">{name}</a>
      </div>
    </li>
  );
}
