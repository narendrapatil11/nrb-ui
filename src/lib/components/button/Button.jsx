import React from 'react';
import { bool, func, oneOf, string } from 'prop-types';
import classNames from "classnames";
import { omit } from "../../utils/lodashFunctions";
import './Button.scss'

const Button = props => {
  const { children, variant, size, className, label, title } = props;
  return (
    <button
      type="button"
      className={ classNames('nrb-btn btn', `btn-${ variant }`, `btn-${ size }`, className) }
      title={ title }
      { ...omit(props, [ ...Object.keys(props), 'children' ]) }
    >
      { label || children }
    </button>
  );
};

Button.propTypes = {
  /**
   * Type of Button
   */
  variant: oneOf([ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link', ]),
  /**
   * Custom classname added to button class
   */
  className: string,
  /**
   * How large should the button be?
   */
  size: oneOf([ undefined, 'sm', 'lg' ]),
  /**
   * Button contents
   */
  label: string,
  /**
   * Button tooltip
   */
  title: string,
  /**
   * Button disabled
   */
  disabled: bool,
  /**
   * Optional click handler
   */
  onClick: func,
};

Button.defaultProps = {
  variant: 'primary',
  size: undefined,
  onClick: undefined,
  disabled: false,
};

export default Button;