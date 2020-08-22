import React from 'react';
import PropsTypes from 'prop-types';
import { useField } from 'formik';
import st from './styles.scss';

const InputBox = (props) => {
  const {
    type,
    placeholder,
    name,
    min,
    max,
  } = props;
  const [field] = useField(name);

  return (
    <>
      <input
        {...field}
        onChange={(event) => {
          if (event.target.value < min) event.target.value = min;
          if (event.target.value > max) event.target.value = max;

          field.onChange(event);
        }}
        className={st.dateBirth}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

InputBox.propTypes = {
  type: PropsTypes.string,
  name: PropsTypes.string,
  placeholder: PropsTypes.string,
  min: PropsTypes.number,
  max: PropsTypes.number,
};

export default InputBox;
