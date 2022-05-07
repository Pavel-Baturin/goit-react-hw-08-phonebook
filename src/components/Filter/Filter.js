import { useDispatch, useSelector } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { changeFilter } from '../../redux/contacts/filterSlice';
import s from './Filter.module.css';

function Filter() {
  const value = useSelector(state => state.filter.value);

  const dispatch = useDispatch();
  return (
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
  );
}

export default Filter;
