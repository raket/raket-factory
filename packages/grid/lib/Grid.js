import React from 'react'
import './style.scss'

const Grid = ({columns = 3, children}) => {
  const columnsClass = 'grid--'+columns
  return (
    <div className={'grid ' + columnsClass}>
      <div style={gridItemStyle}> </div>
      <div style={gridItemStyle}> </div>
      <div style={gridItemStyle}> </div>
      <div style={gridItemStyle}> </div>
      <div style={gridItemStyle}> </div>
      <div style={gridItemStyle}> </div>
      {children}
    </div>
  )
}
export default Grid


const gridItemStyle = {
  background: '#efefef',
  border: '1px solid',
  height: '200px'
}
