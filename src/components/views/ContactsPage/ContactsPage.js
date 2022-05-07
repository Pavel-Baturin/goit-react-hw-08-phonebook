import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <>
      <div className={s.box}>
        <h2 className={s.title}>Contacts</h2>
      </div>

      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
