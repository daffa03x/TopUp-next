import Link from "next/link";

interface FooterItemProps {
    title: string;
    desk: string;
    desk2: string;
    desk3: string;
    desk4?: string;
    href: string;
    href2: string;
    href3: string;
    href4?: string;
}
export default function FooterItem(props: Partial<FooterItemProps>) {
    const {title,desk,desk2,desk3,desk4,href,href2,href3,href4} = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
    <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
    <ul className="list-unstyled">
      <li className="mb-6">
        <Link href={`${href}`}>
        <a className="text-lg color-palette-1 text-decoration-none">
          {desk}
        </a>
        </Link>
      </li>
      <li className="mb-6">
      <Link href={`${href2}`}>
        <a className="text-lg color-palette-1 text-decoration-none">
          {desk2}
        </a>
        </Link>
      </li>
      <li className="mb-6">
      <Link href={`${href3}`}>
        <a className="text-lg color-palette-1 text-decoration-none">
          {desk3}
        </a>
        </Link>
      </li>
      <li className="mb-6">
      <Link href={`${href4}`}>
        <a className="text-lg color-palette-1 text-decoration-none">
          {desk4}
        </a>
        </Link>
      </li>
    </ul>
  </div>
    )
}
