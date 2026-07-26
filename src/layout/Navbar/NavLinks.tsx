import { NAVIGATION } from "@/config/navigation";

export default function NavLinks() {
  const links = NAVIGATION;

  return (
    <ul className="flex flex-wrap items-center gap-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="transition-colors text-slate-900 hover:text-slate-700 hover:underline underline-offset-4 dark:text-slate-100 dark:hover:text-white dark:hover:underline"
          >
            {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  );
}
