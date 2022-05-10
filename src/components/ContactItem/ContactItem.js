import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getIsFetching } from 'redux/contacts/contacts-selectors';
import { ThreeDots } from 'react-loader-spinner';
import s from './ContactItem.module.css';

function ContactItem({ contactId, name, number }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsFetching);

  return (
    <>
      <li className={s.item}>
        {name}: {number}
        <button
          disabled={isLoading}
          className={s.button}
          type="button"
          onClick={() => dispatch(deleteContact(contactId))}
        >
          {isLoading ? (
            <ThreeDots color="lightblue" height={15} width={40} />
          ) : (
            'Delete'
          )}
        </button>
      </li>
    </>
  );
}

export default ContactItem;
