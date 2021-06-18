import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  console.log(options);

  function handleChange({target}) {
    if(target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value))
    }
  }


  return (
    <>
      {options.map((option) => (
        <label key={option}>
          {option}
          <input checked={value.includes(option)} onChange={handleChange} value={option} type="checkbox" />
        </label>
      ))}
    </>
  );
};

export default Checkbox;
