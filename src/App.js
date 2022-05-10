import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './components/Layout/Layout';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { PrivateRoute } from './components/UserMenu/PrivateRoute';
import { PublicRoute } from './components/UserMenu/PublicRoute';
import { getIsFetchingUser } from 'redux/auth/auth-selectors';

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
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(getIsFetchingUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingUser && (
        <Suspense fallback={<h1 className="fallback">Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PublicRoute>
                    <NotFoundPage />
                  </PublicRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
