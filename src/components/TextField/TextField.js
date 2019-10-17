import React from 'react'
import Textfield from '@material-ui/core/TextField'

function TextField({placeholder, label, value, onChange}) {

  return (
    <Textfield    placeholder={placeholder}
                  label={label}
                  value={value}
                  onChange={onChange}
    />
  )
}
export default TextField