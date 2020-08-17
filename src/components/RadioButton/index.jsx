import React from 'react'
import st from './styles.scss'

const RadioButton = props => {
  return (
    <div className={st.radioItem}>
      <input id={props.id} type="radio" name="radio" />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

export default RadioButton