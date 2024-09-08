import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice'; // Імпорти з Redux
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter); // Отримуємо значення фільтру через селектор

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); // Змінюємо фільтр через Redux
  };

  return (
    <div className={css.searchBoxContainer}>
      <label className={css.searchLabel} htmlFor="search-input">
        Find contacts by name
      </label>
      <input
        id="search-input"
        className={css.searchBox}
        type="text"
        placeholder="Type a name..."
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;

