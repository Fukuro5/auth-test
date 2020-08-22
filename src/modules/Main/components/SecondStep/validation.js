import { validateYupSchema } from 'formik';

export default (values) => {
  const errors = {};
  if (!values.gender) errors.gender = 'Gender is required';

  if (!values.day && !values.month && !values.year) {
    errors.date = 'Date is required';
  } else if (!values.day && !values.month) {
    errors.date = 'Day and month is required';
  } else if (!values.day && !values.year) {
    errors.date = 'Day and year is required';
  } else if (!values.month && !values.year) {
    errors.date = 'Month and year is required';
  } else if (!values.day) {
    errors.date = 'Day is required';
  } else if (!values.month) {
    errors.date = 'Month is required';
  } else if (!values.year) {
    errors.date = 'Year is required';
  }

  return errors;
};
