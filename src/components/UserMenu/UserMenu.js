import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getUserEmail } from 'redux/auth/auth-selectors';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const email = useSelector(getUserEmail);

  const dispatch = useDispatch();
  return (
    <div className={s.box}>
      <p>{email}</p>
      <button
        type="button"
        className={s.button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
