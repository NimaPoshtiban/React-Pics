import { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Image Search</label>
          <input onChange={onInputChange} value={term} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
