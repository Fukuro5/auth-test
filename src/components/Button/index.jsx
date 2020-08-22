import React from 'react';
import PropsTypes from 'prop-types';
import st from './styles.scss';

const Button = ({ type, children, onClick }) => (
  <button type={type} className={st.submit} onClick={onClick}>{children}</button>
);

Button.propTypes = {
  type: PropsTypes.string,
  children: PropsTypes.node,
  onClick: PropsTypes.func,
};

export default Button;
