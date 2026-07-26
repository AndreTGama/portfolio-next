import LanguageSwitcher from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="">
      <div className="grid grid-cols-4 gap-4 divide-x divide-white-200 items-end">
        <div className="p-8 col-span-2 h-full">
          <span className="text-8xl font-bold  ">André Gama</span>
        </div>
        <div className="p-8 col-span-1 h-full">
          <p className="flex flex-col h-full justify-between">
            Software Engineer.
            <em>Since 2020.</em>
          </p>
        </div>
        <div className="p-8 col-span-1 h-full">
          <p className="flex flex-row items-end h-full">From Brazil</p>
        </div>
      </div>
      <hr />
      <nav>
        <NavLinks />
        <ThemeToggle />
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
