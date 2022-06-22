import React from 'react';
import '../Style/style.scss';
const Input = ({ label, type, name, onChange, className, value, placeholder }) => {
  return (
    <div className="mb-3">
      {/* <label className="form-label">{label}</label> */}
      <input required className={className} type={type} name={name} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};
export default Input;
