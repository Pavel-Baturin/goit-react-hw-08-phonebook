import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function Navigation() {
  const setActive = ({ isActive }) => (isActive ? 'active link' : 'link');
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={setActive}>
          Phonebook
        </NavLink>
      )}
    </div>
  );
}
