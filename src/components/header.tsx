import { useLocation } from 'preact-iso';
import { ThemeToggle } from './theme-toggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const { url } = useLocation();

  return (
    <header class="border-zinc-200 border-b dark:border-zinc-800">
      <nav class="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" class="flex items-center gap-2 font-semibold">
          <img src="/favicon.svg" alt="" width={24} height={24} />
          Preact Kit
        </a>
        <div class="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={url === link.href ? 'page' : undefined}
              class="rounded-md px-3 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 aria-[current=page]:font-medium aria-[current=page]:text-zinc-900 dark:text-zinc-400 dark:aria-[current=page]:text-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
