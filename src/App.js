import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./components/views/HomePage/HomePage'));
const ContactsPage = lazy(() =>
  import('components/views/ContactsPage/ContactsPage')
);
const RegisterPage = lazy(() =>
  import('components/views/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('components/views/LoginPage/LoginPage'));
const NotFoundPage = lazy(() =>
  import('components/views/NotFoundPage/NotFoundPage')
);

export const App = () => {
  return (
    <>
      <Suspense
        fallback={<Toaster position="top-center" reverseOrder={false} />}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
