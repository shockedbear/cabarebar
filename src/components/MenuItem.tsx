import Link from "next/link";
import { IMenuItem } from "@/data/menu.data";

interface MenuItemProps extends IMenuItem {
  onClick?: () => void;
}

export function MenuItem({ name, href, onClick }: MenuItemProps) {
  return (
    <Link href={href} className="text-white font-['EB_Garamond']" onClick={onClick}>
      {name}
    </Link>
  );
}