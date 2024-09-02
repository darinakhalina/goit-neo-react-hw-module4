import toast, { Toaster } from 'react-hot-toast';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();

    if (!query) {
      toast.error('Search cannot be empty. Please enter a search query.');
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={css['search-bar']}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" aria-label="Search">
          <FaMagnifyingGlass size={16} />
        </button>
      </form>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </header>
  );
};

export default SearchBar;
