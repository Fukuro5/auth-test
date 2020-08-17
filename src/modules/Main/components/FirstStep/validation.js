export const validation = values => {
  const errors = {}

  const regularEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const isEmailTrue = regularEmail.test(values.email)

  if(!values.email) {
    errors.email = 'Email is required'
  } else if(!isEmailTrue) {
    errors.email = 'Invalid email address'
  }

  if(!values.password) {
    errors.password = 'Password is required'
  } else if(values.password.length < 6 || values.password.length > 30) {
    errors.password = 'Invalid password'
  }

  if(!values.confirm) {
    errors.confirm = 'Confirm is required'
  } else if(values.confirm == values.password) {
    errors.confirm = 'Passwords missmatch'
  }

  return errors
}