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
  const [field, meta, helpers] = useField(name);
  const currentDate = new Date();
  // console.log(currentDate.getFullYear());
  return (
    <input
      {...field}
      onChange={(event) => {
        if (event.target.value == 0) helpers.setValue('');
        else if (event.target.value < min) helpers.setValue(min);
        else if (event.target.value > max) helpers.setValue(max);
        else helpers.setValue(event.target.value);
      }}
      onBlur={(event) => {
        if (event.target.value < 10) {
          if (event.target.value[0] != 0) {
            helpers.setValue(`0${event.target.value}`);
          }
        }
      }}
      className={st.dateBirth}
      type={type}
      placeholder={placeholder}
    />
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
