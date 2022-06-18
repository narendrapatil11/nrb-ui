import classNames from "classnames";
import { LIST_ITEM_VARIANTS_CLASSES, LIST_VARIANTS_CLASSES } from "./ListGroup.constant";

export const prepareListClasses = (props) => {
  const { variant } = props;
  return classNames(
    'nrb__listGroup list-group',
    { [LIST_VARIANTS_CLASSES[variant]]: variant }
  );
}
export const prepareListItemClasses = (listItem) => {
  const { variant, active, disabled, badgeContent } = listItem;
  return classNames('list-group-item', {
    [LIST_ITEM_VARIANTS_CLASSES[variant]]: variant,
    'disabled': disabled,
    'active': active,
    'd-flex justify-content-between align-items-center': badgeContent
  });
}
