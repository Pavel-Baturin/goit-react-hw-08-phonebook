import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const setActive = ({ isActive }) => (isActive ? 'active link' : 'link');
  return (
    <div>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={setActive}>
        Phonebook
      </NavLink>
    </div>
  );
}
