import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import s from './Layout.module.css';

export default function Layout() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header className={s.box}>
        <nav className={s.nav}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      <div className={s.container}>
        <Outlet />
      </div>
    </>
  );
}
