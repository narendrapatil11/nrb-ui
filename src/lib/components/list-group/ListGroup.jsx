import React from 'react';
import { arrayOf, bool, element, func, node, number, oneOf, shape, string } from 'prop-types';
import { prepareListClasses, prepareListItemClasses } from "./ListGroup.utils";
import './ListGroup.scss';
import Badge from "../badge";
import { omit } from "../../utils/lodashFunctions";

const ListGroup = props => {
  const { list, variant, displayKey, subLabelDisplayKey, onItemClicked, } = props;
  const listClasses = prepareListClasses({ variant });
  if (list.length) {
    return (
      <ul className={ listClasses }>
        {
          list.map((item) => {
            const listItemClasses = prepareListItemClasses(item);
            return (
              <li
                key={ item?.id }
                className={ listItemClasses }
                onClick={ (ev) => {
                  onItemClicked && onItemClicked(ev, item)
                } }
              >
                {
                  (item[subLabelDisplayKey] || item?.subLabel) ? (
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{ item[displayKey] || item?.label }</div>
                      { item[subLabelDisplayKey] || item?.subLabel }
                    </div>
                  ) : item[displayKey] || item?.label
                }

                { item?.badgeContent &&
                  <Badge content={ item?.badgeContent } { ...omit(item.badgeProps, [ 'content' ]) } /> }
              </li>
            )
          })
        }
      </ul>
    )
  }
  return (
    <div className="alert alert-light" role="alert">
      Not Items available
    </div>
  )
};

ListGroup.propTypes = {
  /**
   * Array of list items
   */
  list: arrayOf(shape({
    id: string,
    label: node,
    subLabel: node,
    active: oneOf([ undefined, bool ]),
    disabled: oneOf([ undefined, bool ]),
    badgeContent: oneOf([ string, number, element ]),
    badgeProps: shape({
      ...omit(Badge.propTypes, [ 'content' ])
    }),
    variant: oneOf([
      undefined,
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ])
  })),
  /**
   * Object Property to access the display label in list item
   */
  displayKey: string,
  /**
   * Type of List Group
   */
  variant: oneOf([
    'default',
    'flush',
    'numbered',
    'horizontal'
  ]),
  onItemClicked: func,
  subLabelDisplayKey: string,
};

ListGroup.defaultProps = {
  displayKey: 'label',
  variant: 'default',
  subLabelDisplayKey: 'subLabel',
}

export default ListGroup;