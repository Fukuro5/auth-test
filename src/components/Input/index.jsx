import React from 'react'
import { Formik, Form, Field, useField } from 'formik'
import st from './styles.scss'

const Input = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return ( 
    <div className={st.inputField}>
    {meta.touched && meta.error ? (
      <div className={st.error}>{meta.error}</div>
      ) : <label className={st.label} htmlFor={props.id}>{label}</label>}
      <input {...field} {...props} className={st.field} />
    </div>
  )
}

export default Input