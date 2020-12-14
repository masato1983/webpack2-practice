import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import './style.scss'

console.log('I am printing logs.')

alert('Hi, source-map!')

ReactDOM.render(
  <div>Hello. React</div>,
  document.getElementById('root')
)
