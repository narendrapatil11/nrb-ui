import React from 'react';

import { ListGroup } from '../lib';
import { action } from "@storybook/addon-actions";


export default {
  title: 'Example/ListGroup',
  component: ListGroup,
  argTypes: {},

};
const LIST_ITEMS_VARIANTS = [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark' ];
const List_VARIANTS = [ 'default', 'flush', 'numbered', 'horizontal' ];
const LIST_ARRAY = [
  { id: 'An item', label: 'An item' },
  { id: 'A second item', label: 'A second item' },
  { id: 'A third item', label: 'A third item' },
  { id: 'A fourth item', label: 'A fourth item' },
  { id: 'And a fifth', label: 'And a fifth one' },
]

const LIST_ITEMS_VARIANTS_ARRAY = [
  { id: 'An item', label: 'An item - (primary)', variant: 'primary' },
  { id: 'A second item', label: 'A second item - (secondary)', variant: 'secondary' },
  { id: 'A third item', label: 'A third item - (success)', variant: 'success' },
  { id: 'A fourth item', label: 'A fourth item - (danger)', variant: 'danger' },
  { id: 'And a fifth', label: 'And a fifth one - (warning)', variant: 'warning' },
  { id: 'And a sixth', label: 'And a sixth one - (info)', variant: 'info' },
  { id: 'And a seventh', label: 'And a seventh one - (light)', variant: 'light' },
  { id: 'And a eighth', label: 'And a eighth one - (dark)', variant: 'dark' },
]

const ACTIVE_LIST_ARRAY = [
  { id: 'An item', label: 'An item', active: false },
  { id: 'A second item', label: 'A second item', active: true },
  { id: 'A third item', label: 'A third item', active: false },
  { id: 'A fourth item', label: 'A fourth item', active: false },
  { id: 'And a fifth', label: 'And a fifth one', active: false },
]

const BADGE_LIST_ARRAY = [
  { id: 'An item', label: 'An item', badgeContent: 1 },
  { id: 'A second item', label: 'A second item', badgeContent: 2 },
  { id: 'A third item', label: 'A third item', badgeContent: 3 },
  { id: 'A fourth item', label: 'A fourth item', badgeContent: 12 },
  { id: 'And a fifth', label: 'And a fifth one', badgeContent: 11 },
]

const DISTINCT_BADGE_LIST_ARRAY = [
  { id: 'An item', label: 'An item - (primary)', badgeContent: '2', badgeProps: { variant: 'primary' } },
  { id: 'A second item', label: 'A second item - (secondary)', badgeContent: '4', badgeProps: { variant: 'secondary' } },
  { id: 'A third item', label: 'A third item - (success)', badgeContent: '3', badgeProps: { variant: 'success' } },
  { id: 'A fourth item', label: 'A fourth item - (danger)', badgeContent: '5', badgeProps: { variant: 'danger' } },
  { id: 'And a fifth', label: 'And a fifth one - (warning)', badgeContent: '7', badgeProps: { variant: 'warning' } },
  { id: 'And a sixth', label: 'And a sixth one - (info)', badgeContent: '1', badgeProps: { variant: 'info' } },
  { id: 'And a seventh', label: 'And a seventh one - (light)', badgeContent: '9', badgeProps: { variant: 'light' } },
  { id: 'And a eighth', label: 'And a eighth one - (dark)', badgeContent: '8', badgeProps: { variant: 'dark' } },
]

const VariantsTemplate = (args) => {
  return (
    List_VARIANTS.map((variant) => (
      <div key={ variant } style={ { marginTop: 30 } }>
        <h3>List group: { variant }</h3>
        <ListGroup list={ LIST_ARRAY } variant={ variant } { ...args } />
      </div>
    ))
  )
}
export const Types = VariantsTemplate.bind({});

const ListItemVariantsTemplate = (args) => <ListGroup list={ LIST_ITEMS_VARIANTS_ARRAY }
                                                      variant="default"  { ...args } />
export const ListItemTypes = ListItemVariantsTemplate.bind({});

const ActiveListItemTemplate = (args) => <ListGroup list={ ACTIVE_LIST_ARRAY } variant="default"  { ...args } />
export const ActiveListItem = ActiveListItemTemplate.bind({});

const ListItemEventsTemplate = (args) => <ListGroup list={ ACTIVE_LIST_ARRAY } variant="default"  { ...args } />
export const ListItemEvents = ListItemEventsTemplate.bind({});

const WithBadgeTemplate = (args) => <ListGroup list={ BADGE_LIST_ARRAY } variant="default"  { ...args } />
export const WithBadge = WithBadgeTemplate.bind({});

const WithDifferentBadgeTemplate = (args) => <ListGroup list={ DISTINCT_BADGE_LIST_ARRAY } variant="default"  { ...args } />
export const WithDifferentBadge = WithDifferentBadgeTemplate.bind({});

