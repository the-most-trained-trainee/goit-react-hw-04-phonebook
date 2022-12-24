import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onSearch }) => {
  const searchRequest = e => onSearch(e.currentTarget.value);

  return (
    <div>
      <label htmlFor="">Find Contacts by Name</label>
      <input type="text" name="find" onChange={searchRequest} />
    </div>
  );
};

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Filter;
