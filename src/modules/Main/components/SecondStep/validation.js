export default (values) => {
  const errors = {};
  if (!values.gender) errors.gender = 'Gender is required';

  const currentDate = new Date();
  const birthDate = new Date(values.year, values.month, values.day);

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
  } else if (values.year < 1900 || values.year > 2020) {
    errors.date = 'You are too old';
  } else if ((currentDate.getFullYear() - birthDate.getFullYear()) < 18) {
    errors.date = 'You are too young';
  } else if ((currentDate.getFullYear() - birthDate.getFullYear()) >= 18) {
    if ((currentDate.getMonth() - birthDate.getMonth()) < 0) {
      errors.date = 'You are too young';
    } else if ((currentDate.getMonth() - birthDate.getMonth()) == 0) {
      if ((currentDate.getDate() - birthDate.getDate()) < 0) {
        errors.date = 'You are too young';
      }
    }
  }

  return errors;
};
