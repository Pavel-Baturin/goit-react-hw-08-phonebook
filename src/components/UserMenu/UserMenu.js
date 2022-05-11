import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';
import s from './UserMenu.module.css';
import avatar from '../../images/user.jpg';

export default function UserMenu() {
  const name = useSelector(getUserName);

  const dispatch = useDispatch();
  return (
    <div className={s.box}>
      <img src={avatar} alt="user" className={s.avatar} />
      <p className={s.name}>{name}</p>
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
