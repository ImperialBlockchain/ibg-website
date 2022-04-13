import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages

const { PUBLIC_URL } = process.env;

const Index = lazy(() => import('./pages/Index'))
const Team = lazy(() => import('./pages/Team'));
const Newsletter = lazy(() => import('./pages/Newsletter'));
const Partners = lazy(() => import('./pages/Partners'));
const Contact = lazy(() => import('./pages/Contact'));
const Signup = lazy(() => import('./pages/Signup'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/newsletter/:id" element={<Newsletter />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} status={404} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
