import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { logIn } from 'redux/auth/auth-operations';
import s from './LoginPage.module.css';

export default function LoginPage() {
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="jane@sample.com"
            required
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="enter at least 7 characters"
            minLength={7}
            required
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <button className={s.button} type="submit">
          Login
        </button>
      </form>
      {error && <h1 className={s.error}>{error}</h1>}
    </>
  );
}
