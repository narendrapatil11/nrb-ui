import React from 'react';
import { ListGroup } from '../lib';
import { LIST_GROUP_META_DATA } from "./metaData";

export default {
  title: 'Components/ListGroup',
  component: ListGroup,
  argTypes: {},

};

const VariantsTemplate = (args) => {
  return (
    LIST_GROUP_META_DATA.List_VARIANTS.map((variant) => (
      <div key={ variant } style={ { marginTop: 30 } }>
        <h3>List group: { variant }</h3>
        <ListGroup list={ LIST_GROUP_META_DATA.LIST_ARRAY } variant={ variant } { ...args } />
      </div>
    ))
  )
}
export const Types = VariantsTemplate.bind({});

const ListItemVariantsTemplate = (args) => <ListGroup list={ LIST_GROUP_META_DATA.LIST_ITEMS_VARIANTS_ARRAY }
                                                      variant="default"  { ...args } />
export const ListItemTypes = ListItemVariantsTemplate.bind({});

const ActiveListItemTemplate = (args) => <ListGroup list={ LIST_GROUP_META_DATA.ACTIVE_LIST_ARRAY } variant="default"  { ...args } />
export const ActiveListItem = ActiveListItemTemplate.bind({});

const DisableListItemTemplate = (args) => <ListGroup list={ LIST_GROUP_META_DATA.DISABLE_LIST_ARRAY } variant="default"  { ...args } />
export const DisableListItem = DisableListItemTemplate.bind({});

const ListItemEventsTemplate = (args) => <ListGroup list={ LIST_GROUP_META_DATA.ACTIVE_LIST_ARRAY } variant="default"  { ...args } />
export const ListItemEvents = ListItemEventsTemplate.bind({});

const WithBadgeTemplate = (args) => <ListGroup list={ LIST_GROUP_META_DATA.BADGE_LIST_ARRAY } variant="default"  { ...args } />
export const WithBadge = WithBadgeTemplate.bind({});

const WithDifferentBadgeTemplate = (args) => <ListGroup list={ LIST_GROUP_META_DATA.DISTINCT_BADGE_LIST_ARRAY }
                                                        variant="default"  { ...args } />
export const WithDifferentBadge = WithDifferentBadgeTemplate.bind({});

const WithSubLabelTemplate = (args) => <ListGroup list={ LIST_GROUP_META_DATA.SUB_LABEL_LIST_ARRAY } variant="default"  { ...args } />
export const WithSubLabel = WithSubLabelTemplate.bind({})