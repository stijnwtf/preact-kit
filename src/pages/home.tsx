import { Counter } from '@/components/counter';

const features = [
  { title: 'Vite', body: 'Instant dev server and optimized production builds.' },
  { title: 'TypeScript', body: 'Strict mode on, path aliases set up.' },
  { title: 'Routing', body: 'preact-iso with lazy routes and prerendering.' },
  { title: 'Signals', body: 'Fine-grained reactive state with @preact/signals.' },
  { title: 'Tailwind CSS', body: 'v4 with dark mode and a brand color scale.' },
  { title: 'Vitest', body: 'Testing Library, jsdom and coverage included.' },
  { title: 'Biome', body: 'One fast tool for linting and formatting.' },
  { title: 'CI', body: 'GitHub Actions, Dependabot and pre-commit hooks.' },
];

export function Home() {
  return (
    <div class="space-y-16">
      <section class="space-y-6">
        <span class="inline-block rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-700 text-xs dark:bg-brand-500/10 dark:text-brand-100">
          3kB runtime. Zero config.
        </span>
        <h1 class="font-bold text-4xl tracking-tight sm:text-5xl">
          Ship Preact apps <span class="text-brand-600 dark:text-brand-500">fast</span>.
        </h1>
        <p class="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          A batteries-included starter with everything wired up, so you can skip the setup and start building.
        </p>
        <Counter />
      </section>

      <section>
        <h2 class="mb-6 font-semibold text-xl">What's inside</h2>
        <ul class="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f.title} class="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
              <h3 class="font-medium">{f.title}</h3>
              <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
