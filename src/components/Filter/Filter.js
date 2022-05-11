import { useDispatch, useSelector } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import s from './Filter.module.css';
import filterBook from '../../images/filter-book.jpg';

function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();
  return (
    <div className={s.box}>
      <img src={filterBook} alt="phonebook" className={s.phone} />
      <label className={s.label}>
        Find contacts by name
        <DebounceInput
          className={s.input}
          type="text"
          autoComplete="off"
          value={value}
          minLength={1}
          debounceTimeout={300}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}

export default Filter;
