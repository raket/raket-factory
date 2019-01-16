import React from 'react'
import ReactDOM from 'react-dom'
import Grid from './lib/Grid'

ReactDOM.render(
    <div>
        <h1>Grid - 2 Columns</h1>
        <Grid columns={'2'} />
        <br />
        <h1>Grid - 3 Columns</h1>
        <Grid columns={'3'} />
        <br />
        <h1>Grid - 4 Columns</h1>
        <Grid columns={'4'} />
    </div>,
    document.getElementById('root')
)
