import React from 'react';

const Radio = ({ pergunta, active, value, onChange, id, options }) => {
 if(active === false) return null;
  return (

    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input value={option} id={ id} onChange={onChange} checked={value === option} type="radio" />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
