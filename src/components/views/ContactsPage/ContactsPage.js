import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from './ContactsPage.module.css';
import phone from '../../../images/image-phone.png';

export default function ContactsPage() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={s.box}>
        <h2 className={s.title}>
          <img src={phone} alt="phone" className={s.phone} />
          Contacts
        </h2>
      </div>

      <div className={s.flex}>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
