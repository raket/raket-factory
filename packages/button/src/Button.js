import React from 'react'
import t from 'prop-types'

const Button = (props) => {
  return(
    <div style={defaultStyle}>{props.text}</div>
  )
}

export default Button

const defaultStyle = {
  background: '#0095bd',
  color: '#fff',
  borderRadius: '3px',
  padding: '10px 20px',
  margin: '10px',
  cursor: 'pointer',
  textAlign: 'center'
}

Button.propTypes = {
  /** The button text */
  text: t.string,
  /** A callback action that handles the click. */
  onClick: t.func,
  /** Button type. primary, secondary... */
  type: t.oneOf(['primary', 'secondary']),
  /** Add classes to the button */
  classes: t.string,
}

Button.defaultProps = {
  text: 'Hej',
  onClick: null,
  type: 'primary',
  classes: 'button',
}
