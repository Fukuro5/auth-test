import React from 'react';
import PropsTypes from 'prop-types';
import st from './styles.scss';

const Button = ({ type, children }) => (
  <button type={type} className={st.submit}>{children}</button>
);

Button.propTypes = {
  type: PropsTypes.string,
  children: PropsTypes.node.isRequired,
};

export default Button;
