import { Toaster } from 'react-hot-toast';
import s from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={s.box}>
        <h1 className={s.title}>Phonebook</h1>
      </div>

      <ContactForm />
      <div className={s.box}>
        <h2 className={s.title}>Contacts</h2>
      </div>

      <Filter />
      <ContactList />
    </>
  );
}

export default App;
