import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  const setActive = ({ isActive }) => (isActive ? 'active link' : 'link');
  return (
    <div>
      <NavLink to="/register" className={setActive}>
        Registration
      </NavLink>
      <NavLink to="/login" className={setActive}>
        Login
      </NavLink>
    </div>
  );
}
