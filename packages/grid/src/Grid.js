import React from 'react'
import t from 'prop-types'

const Grid = (props) => {

  const defaultStyle = {
    display: 'grid',
    gridGap: props.spacing,
    gridTemplateColumns: `repeat(${props.columns},1fr)`,
  }

  const gridItemStyle = {
    background: '#efefef',
    border: '1px solid',
    height: '200px'
  }

  return (
    <div style={defaultStyle}>
      <div style={gridItemStyle}> </div>
      <div style={gridItemStyle}> </div>
      <div style={gridItemStyle}> </div>
      <div style={gridItemStyle}> </div>
      <div style={gridItemStyle}> </div>
      <div style={gridItemStyle}> </div>
      {props.children}
    </div>
  )
}

export default Grid



Grid.propTypes = {
  /** Spacing between columns*/
  spacing: t.string,
  /** Nr of columns per row*/
  columns: t.number,
  /** Add classes to the grid */
  classes: t.string,
}

Grid.defaultProps = {
  spacing: '2rem',
  classes: 'grid',
  columns: 3
}
