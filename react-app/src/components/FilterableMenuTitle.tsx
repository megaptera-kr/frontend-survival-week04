type FilterableMenuTitleProps = {
  title: string;
};

export default function FilterableMenuTitle({
  title,
}: FilterableMenuTitleProps) {
  return <h1 className="title-section">{title}</h1>;
}
