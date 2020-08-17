import React from 'react';
import PropsTypes from 'prop-types';
import {
  useField,
} from 'formik';
import st from './styles.scss';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div className={st.inputField}>
    {meta.touched && meta.error ? (
      <div className={st.error}>{meta.error}</div>
    ) : <label className={st.label} htmlFor={props.id}>{label}</label>}
      <input {...field} {...props} className={st.field} />
    </div>
  );
};

Input.propTypes = {
  label: PropsTypes.string,
  id: PropsTypes.string,
};

export default Input;
