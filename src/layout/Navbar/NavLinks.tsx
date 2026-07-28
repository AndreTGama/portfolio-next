import MenusLinks from "@/components/MenusLinks";

export default function NavLinks() {

  return (
    <ul className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100 md:justify-start md:gap-6">
      <MenusLinks />
    </ul>
  );
}
