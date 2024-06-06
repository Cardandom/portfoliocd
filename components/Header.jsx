import Link from "next/link";

//components
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Carlos<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contacto</Button>
          </Link>
        </div>
        {/* mobile */}
        <div className="xl:hidden">
           mobile 
        </div>
      </div>
    </header>
  );
};

export default Header;