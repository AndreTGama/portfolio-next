import { NAVIGATION } from "@/config/navigation";

export default function NavLinks() {
  const links = NAVIGATION;

  return (
    <ul className="flex flex-wrap items-center gap-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="transition-colors hover:text-white"
          >
            {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  );
}
