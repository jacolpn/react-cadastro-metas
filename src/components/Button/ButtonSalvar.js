import React from 'react'
import Button from '@material-ui/core/Button'

function ButtonSalvar({color, type, onClick, children, startIcon, size}) {
  return (
    <Button variant="contained"
            size={size}
            startIcon={startIcon}
            type={type}
            onClick={onClick}
            children={children}
            color={color}
    />
  )
}
export default ButtonSalvar