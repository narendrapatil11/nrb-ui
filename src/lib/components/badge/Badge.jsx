import React, { useLayoutEffect } from 'react';
import { bool, element, oneOf, oneOfType, string } from 'prop-types';
import classNames from "classnames";
import { BADGE_VARIANTS } from "./Badge.constant";
import { omit } from "../../utils/lodashFunctions";
import './Badge.scss';

const Badge = props => {
  const { variant, rounded, content, topPlacement, children } = props;
  const badgeRef = React.useRef();

  const badgeClass = classNames(
    { 'position-absolute top-0 start-100 translate-middle border border-light': topPlacement, },
    'badge',
    {
      'rounded-pill': rounded,
      [`bg-${ variant }`]: true,
      'text-dark': variant === BADGE_VARIANTS.LIGHT,
      'p-2': topPlacement && !content && !children
    })
  useLayoutEffect(() => {
    console.log(Object.keys(props));
    badgeRef.current.parentElement.classList.add('position-relative');
  }, [ topPlacement ])

  return (
    <span
      ref={ badgeRef }
      className={ badgeClass }
      { ...omit(props, [ ...Object.keys(props), 'children' ]) }
    >
      { content || children || <span className="visually-hidden">New alerts</span> }
    </span>
  );
};

Badge.propTypes = {
  /**
   * Type of Badge
   */
  variant: oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
  /**
   * Badge content
   */
  content: oneOfType([ string, element ]).isRequired,
  /**
   * Rounded Badge
   */
  rounded: bool,
  /**
   * Badge position to top-right
   */
  topPlacement: bool,
};

export default Badge;
