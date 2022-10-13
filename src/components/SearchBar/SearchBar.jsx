import { useState } from 'react';
import { toast } from 'react-toastify';

const SearchBar = (props) => {
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
    <header >
      <form onSubmit={handelSubmit} >
        <input
        
          name="query"
          type="text"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search movies"
          onChange={handelQueryChange}
        />
        <button type="submit" >
          <span>Search</span>
        </button>
      </form>
    </header>
  );
}
export default SearchBar