import React from 'react';
import { InputBox } from '@/components';
import PropsTypes from 'prop-types';
import { useField } from 'formik';
import st from './styles.scss';

const Date = (props) => {
  const [field, meta] = useField('date');
  const [dField, dMeta] = useField('day');
  const [mField, mMeta] = useField('month');
  const [yField, yMeta] = useField('year');
  const min = [1, 1];
  const max = [31, 12, 2020];
  const names = ['day', 'month', 'year'];
  const placeholders = ['DD', 'MM', 'YYYY'];

  return (
    <>
      {meta.error && dMeta.touched && mMeta.touched && yMeta.touched ? (
        <div className={st.error}>{meta.error}</div>
      ) : <h2 className="head-text">{props.head}</h2>}
      {names.map((name, i) => (
          <InputBox
            key={name}
            type="number"
            name={name}
            placeholder={placeholders[i]}
            min={min[i]}
            max={max[i]}
          />
      ))}
    </>
  );
};

Date.propTypes = {
  head: PropsTypes.string,
};

export default Date;
