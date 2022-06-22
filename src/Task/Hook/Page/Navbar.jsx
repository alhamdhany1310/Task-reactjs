import React from 'react';
const Nav = ({ value, onChange }) => {
  return (
    <div>
      <form className="d-flex" role="search">
        <input name="search" value={value} onChange={onChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  );
};

export default Nav;
