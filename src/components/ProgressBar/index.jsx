import React from 'react'
import st from './styles.scss'

const ProgressBar = props => {
  return (
    <progress className={st.progressBar} value={props.value} max="100"></progress>
  )
}

export default ProgressBar