export function About() {
  return (
    <article class="max-w-2xl space-y-4">
      <h1 class="font-bold text-3xl tracking-tight">About</h1>
      <p class="text-zinc-600 dark:text-zinc-400">
        This page is lazy loaded. Open your network tab and navigate here: it arrives as its own chunk. At build time it
        is also prerendered to static HTML, so it loads instantly and is crawlable.
      </p>
      <p class="text-zinc-600 dark:text-zinc-400">
        Add a route in <code class="font-mono text-sm">src/app.tsx</code> and a page in{' '}
        <code class="font-mono text-sm">src/pages/</code>.
      </p>
    </article>
  );
}
