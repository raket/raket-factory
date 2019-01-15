import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

import './style/style.scss'

ReactDOM.render(
  <div style={{maxWidth: '720px', margin: '4rem auto'}}>
    <div style={{marginBottom: '20px'}}>
      <Button>I'm primary</Button>
    </div>

    <div style={{marginBottom: '20px'}}>
      <Button type={'secondary'}> I'm secondary!</Button>
    </div>

    <div style={{marginBottom: '20px'}}>
      <Button type={'secondary'} action={() => alert('Click!')}> onClick!</Button>
    </div>

  </div>,
  document.getElementById('root')
)
