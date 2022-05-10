import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { register } from 'redux/auth/auth-operations';
import s from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    toast.success(`Welcome ${name} to the application Phonebook`);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
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
            required
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <button className={s.button} type="submit">
          Register
        </button>
      </form>
    </>
  );
}
