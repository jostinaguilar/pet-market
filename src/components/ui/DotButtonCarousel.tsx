interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export function DotButtonCarousel(props: Props) {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}
