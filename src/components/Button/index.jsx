import React from 'react'
import st from './styles.scss'

const Button = props => {
  return (
    <button type={props.type} className={st.submit}>{props.name}</button>
  )
}

export default Button

