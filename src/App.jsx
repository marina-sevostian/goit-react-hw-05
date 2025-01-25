import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import { lazy, Suspense } from 'react';

// const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
