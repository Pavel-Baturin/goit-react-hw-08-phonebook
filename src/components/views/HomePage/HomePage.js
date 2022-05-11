import s from './HomePage.module.css';
import phone from '../../../images/phones.png';

export default function HomePage() {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Phonebook</h1>
      <img src={phone} alt="phone" className={s.phone} />
    </div>
  );
}
