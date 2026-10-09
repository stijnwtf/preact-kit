import { effect, signal } from '@preact/signals';

export type Theme = 'light' | 'dark';

function initialTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export const theme = signal<Theme>(initialTheme());

export function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
}

if (typeof document !== 'undefined') {
  effect(() => {
    document.documentElement.classList.toggle('dark', theme.value === 'dark');
    try {
      localStorage.setItem('theme', theme.value);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies).
    }
  });
}
