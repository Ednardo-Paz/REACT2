import React from 'react'

const Input = ({label, id, value, setValue,...rest}) => {
  
  return (
    <>
      <label id={id} htmlFor="">{label}</label>
      <input id={id} onChange={({target}) => setValue(target.value)} value={value} name={id} type="text" {...rest}  />
    </>
  )
}

export default Input
