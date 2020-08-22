import React from 'react';
import PropsTypes from 'prop-types';
import { useField } from 'formik';
import st from './styles.scss';

const Switch = ({ name, labels }) => {
  const [field, meta] = useField(name);

  return (
    <>
      {meta.touched && meta.error ? (
        <div className={st.error}>{meta.error}</div>
      ) : <h2 className="head-text">GENDER</h2>}
      {labels.map((label, i) => (
        <div className={st.radioItem} key={label}>
          <input {...field} type="radio" id={name + i} value={label} />
          <label htmlFor={name + i}>{label}</label>
        </div>
      ))}
    </>
  );
};

Switch.propTypes = {
  name: PropsTypes.string,
  labels: PropsTypes.array,
};

export default Switch;
