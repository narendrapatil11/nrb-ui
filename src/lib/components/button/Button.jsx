import React from 'react';
import { bool, func, oneOf, string } from 'prop-types';
import classNames from "classnames";
import { omit } from "../../utils/lodashFunctions";
import './Button.scss'

/**
 *
 * Button component styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
 *
 * This component supports rest props; any additional props on button will be
 * passed through to the root node of `Button`.
 */
const Button = props => {
  const { children, variant, size, className, label, title, disabled, outline } = props;
  const generalClass = outline ? 'btn-outline-' : 'btn-';
  return (
    <button
      type="button"
      className={ classNames('nrb-btn btn', `${ generalClass }${ variant }`, `btn-${ size }`, className) }
      title={ title }
      disabled={ disabled }
      { ...omit(props, [ ...Object.keys(props), 'children' ]) }
    >
      { label || children }
    </button>
  );
};

Button.propTypes = {
  /**
   * Style of button to render
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
   * Renders the button label
   */
  label: string,
  /**
   * Button tooltip
   */
  title: string,
  /**
   * disables the button when set to `true`
   */
  disabled: bool,
  /**
   * Outline the button when set to `true`
   */
  outline: bool,
  /**
   * Click callback, with event object passed as argument
   */
  onClick: func,
  /**
   * Optional value for `data-testid` attribute
   */
  testId: string,
};

Button.defaultProps = {
  variant: 'primary',
  size: undefined,
  onClick: undefined,
  disabled: false,
  outline: false,
};

export default Button;