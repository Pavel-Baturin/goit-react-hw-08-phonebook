import { useDeleteContactMutation } from '../../redux/contacts/contactApi';
import { ThreeDots } from 'react-loader-spinner';
import s from './ContactItem.module.css';

function ContactItem({ id, name, phone }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <li className={s.item}>
        {name}: {phone}
        <button
          disabled={isLoading}
          className={s.button}
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
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
