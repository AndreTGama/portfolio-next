import LanguageSwitcher from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <header>
        <div className='top-bar'>
            <div>
                <span>André Gama</span>
            </div>
            <div>
                <span>Software Engineer.</span>
                <span>since 2020.</span>
            </div>
            <div>
                From <span>Brazil</span>
            </div>
        </div>
      <nav>
        <ThemeToggle />
        <LanguageSwitcher />
      </nav>
    </header>
  );
}