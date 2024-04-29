import './SearchBox.css';
import PropTypes from 'prop-types';

function SearchBox({ searchTerm, onSearchChange }) {
    return (
      <div className="search-box">
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchTerm}
      onChange={onSearchChange}
            />
    </div>
  );
}

SearchBox.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;