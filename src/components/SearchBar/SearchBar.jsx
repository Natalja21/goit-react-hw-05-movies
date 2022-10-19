import { useState } from 'react';
import { toast } from 'react-toastify';
import { SearchForm } from './SearchBar.styled';

const SearchBar = props => {
  const [query, setQuery] = useState('');

  const handelQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const handelSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.warning('Please, enter query !', {
        theme: 'colored',
        closeOnClick: true,
      });
      return;
    }
    props.onSubmitSearchBar(query);
    setQuery('');
  };
  return (
    <div>
      <SearchForm onSubmit={handelSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search movies"
          onChange={handelQueryChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </SearchForm>
    </div>
  );
};
export default SearchBar;
