interface ReachedItemProps {
    title: string;
    desk: string;
}
export default function ReachedItem(props: ReachedItemProps) {
    const {title,desk} = props;
  return (
    <div>
    <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
    <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desk}</p>
    </div>
    )
}
