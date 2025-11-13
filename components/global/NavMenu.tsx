"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-6 items-start h-full text-lg font-medium ">
        <li>
            <Link href="/"  className={`nav-link ${pathname === '/' ? "font-semibold" : ""}`}>Animation Variant 1</Link> 
        </li>
          <li>
            <Link href="/secondary"  className={`nav-link ${pathname === '/secondary' ? "font-semibold" : ""}`}>Animation Variant 2</Link> 
        </li>
    </ul>
  )
}
