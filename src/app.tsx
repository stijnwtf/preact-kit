import { ErrorBoundary, LocationProvider, lazy, Route, Router } from 'preact-iso';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Home } from '@/pages/home';
import { NotFound } from '@/pages/not-found';

// Code-split routes: each lazy page becomes its own chunk.
const About = lazy(() => import('@/pages/about').then((m) => m.About));

export function App() {
  return (
    <LocationProvider>
      <div class="flex min-h-dvh flex-col">
        <Header />
        <main class="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6">
          <ErrorBoundary>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route default component={NotFound} />
            </Router>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </LocationProvider>
  );
}
