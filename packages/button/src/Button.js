import React from 'react'


const Button = ({children = null, href = null, type = null, onClick = null}) => {
  const buttonTypeClass = !!type ? 'button--' + type : ''
  return(
    <a href={href} onClick={onClick} className={'button ' +  buttonTypeClass}>{children}</a>
  )
}

export default Button




