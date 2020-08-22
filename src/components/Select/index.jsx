import React, { useCallback } from 'react';
import Select from 'react-select';
import { useField } from 'formik';

const options = [
  { value: 'internet', label: 'In internet' },
  { value: 'book', label: 'In book' },
  { value: 'magazine', label: 'In magazine' },
];
const SelectOptions = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = useCallback(({ value }) => {
    helpers.setValue(value);
  }, [helpers]);

  return (
    <Select
      {...field}
      value={options && options.find(({ value }) => value === field.value)}
      onChange={handleChange}
      options={options}
    />
  );
};

export default SelectOptions;
