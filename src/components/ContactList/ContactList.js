import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  getContacts,
  getIsFetching,
  getError,
  getFilter,
} from 'redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const isFetching = useSelector(getIsFetching);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {isFetching && <TailSpin color="lightblue" height={200} width={200} />}
      {error && <div className={s.error}>{`ERROR: ${error} ${error}`}</div>}
      {filtredContacts.length > 0 &&
        !isFetching &&
        filtredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} contactId={id} name={name} number={number} />
        ))}
    </ul>
  );
}
