"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "AboutUs",
    path: "/about",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Features",
    path: "/features",
  },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center my-8">
      <div className="flex items-center gap-8">
        <div className="flex gap-1 items-center">
          <div>
            <Image src="/logo.png" width={20} height={25} alt="logo" />
          </div>
          <div className="font-extrabold text-xl">
            uifry<span className="text-[5px] align-super">TM</span>
          </div>
        </div>
        <div className="flex gap-4">
          {links.map((link) => {
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`${link.path === pathname?"text-orange-600 font-extrabold":"font-semibold"} hover:-translate-y-0.5 duration-500`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <button className="rounded bg-black text-white py-2 px-8 hover:scale-110 duration-500">
          Download
        </button>
      </div>
    </div>
  );
}
