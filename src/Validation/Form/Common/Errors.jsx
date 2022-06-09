import React from 'react';
const ShowErrors = ({ errors }) => {
  return (
    <ul>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};
export default ShowErrors;
