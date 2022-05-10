import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getIsDeliting } from 'redux/contacts/contacts-selectors';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ contactId, name, number }) {
  const dispatch = useDispatch();
  const isDeliting = useSelector(getIsDeliting);

  return (
    <>
      <li className={s.item}>
        {name}: {number}
        <button
          disabled={isDeliting}
          className={s.button}
          type="button"
          onClick={() => dispatch(deleteContact(contactId))}
        >
          {isDeliting ? (
            <ThreeDots color="lightblue" height={15} width={40} />
          ) : (
            'Delete'
          )}
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  contactId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
