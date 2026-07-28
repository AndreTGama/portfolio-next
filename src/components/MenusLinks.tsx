import { NAVIGATION } from "@/config/navigation";

export default function MenusLinks() {
  const links = NAVIGATION;

  return links.map((link) => (
    <li key={link.href}>
      <a
        href={link.href}
        className="transition-colors text-slate-900 hover:text-slate-700 hover:underline underline-offset-4 dark:text-slate-100 dark:hover:text-white dark:hover:underline"
      >
        {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
      </a>
    </li>
  ));
}
