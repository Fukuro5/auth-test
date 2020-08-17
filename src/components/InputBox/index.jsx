import React from 'react'
import st from './styles.scss'

const InputBox = props => {
  return (
    <input className={st.dateBirth} type={props.type} placeholder={props.placeholder} min={props.min} max={props.max} />
  )
}

export default InputBox