import { hydrate, prerender as ssr } from 'preact-iso';
import { App } from './app';
import './styles.css';

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app') as HTMLElement);
}

export async function prerender(data: Record<string, unknown>) {
  return await ssr(<App {...data} />);
}
