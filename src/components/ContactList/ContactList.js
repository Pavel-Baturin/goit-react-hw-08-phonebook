import { useSelector } from 'react-redux';
import { useGetContactQuery } from '../../redux/contacts/contactApi';
import { TailSpin } from 'react-loader-spinner';
import ContactItem from '../ContactItem/ContactItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const { data: contacts, isFetching, error, isError } = useGetContactQuery();

  const filter = useSelector(state => state.filter.value);
  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filtredContacts = getFiltredContacts();

  return (
    <ul className={s.list}>
      {isFetching && <TailSpin color="lightblue" height={200} width={200} />}
      {isError && (
        <div
          className={s.error}
        >{`ERROR: ${error.status} ${error.data.message}`}</div>
      )}
      {filtredContacts &&
        !isFetching &&
        filtredContacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
    </ul>
  );
}
