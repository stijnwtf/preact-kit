import { useComputed, useSignal } from '@preact/signals';

export function Counter({ initial = 0 }: { initial?: number }) {
  const count = useSignal(initial);
  const doubled = useComputed(() => count.value * 2);

  return (
    <div class="inline-flex items-center gap-4 rounded-xl border border-zinc-200 p-2 pl-4 dark:border-zinc-800">
      <span class="text-sm text-zinc-600 dark:text-zinc-400">
        Count: <strong class="text-zinc-900 tabular-nums dark:text-zinc-100">{count}</strong>
        <span class="ml-3">
          Doubled: <strong class="text-zinc-900 tabular-nums dark:text-zinc-100">{doubled}</strong>
        </span>
      </span>
      <div class="flex gap-1">
        <button
          type="button"
          onClick={() => count.value--}
          aria-label="Decrement"
          class="size-9 rounded-lg bg-zinc-100 font-medium transition hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => count.value++}
          aria-label="Increment"
          class="size-9 rounded-lg bg-brand-600 font-medium text-white transition hover:bg-brand-700"
        >
          +
        </button>
      </div>
    </div>
  );
}
