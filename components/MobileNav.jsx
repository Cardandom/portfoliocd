"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "servicios",
    path: "/servicios",
  },
  {
    name: "resumen",
    path: "/resumen",
  },
  {
    name: "contacto",
    path: "/contacto",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
  <Sheet>
    <SheetTrigger className="flex justify-center items-center">  
        <CiMenuFries className="text-[32px] text-accent-hover"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-32 text-center text-2xl">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    CD<span className="text-accent-hover">.</span>
                </h1>
            </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
            {Links.map((link, index) => {
                return (
                <Link href={link.path} key={index} className={`${link.path === pathname &&
                "text-accent-hover border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            )
            })}
        </nav>
    </SheetContent>
  </Sheet>
  )
};

export default MobileNav;
