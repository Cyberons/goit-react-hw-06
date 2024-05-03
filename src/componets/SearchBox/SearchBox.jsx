import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

function SearchBox() {
  const searchTerm = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBox;