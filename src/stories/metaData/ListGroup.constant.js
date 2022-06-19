export const LIST_ITEMS_VARIANTS = [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark' ];
export const List_VARIANTS = [ 'default', 'flush', 'numbered', 'horizontal' ];
export const LIST_ARRAY = [
  { id: 'An item', label: 'An item' },
  { id: 'A second item', label: 'A second item' },
  { id: 'A third item', label: 'A third item' },
  { id: 'A fourth item', label: 'A fourth item' },
  { id: 'And a fifth', label: 'And a fifth one' },
]

export const LIST_ITEMS_VARIANTS_ARRAY = [
  { id: 'An item', label: 'An item - (primary)', variant: 'primary' },
  { id: 'A second item', label: 'A second item - (secondary)', variant: 'secondary' },
  { id: 'A third item', label: 'A third item - (success)', variant: 'success' },
  { id: 'A fourth item', label: 'A fourth item - (danger)', variant: 'danger' },
  { id: 'And a fifth', label: 'And a fifth one - (warning)', variant: 'warning' },
  { id: 'And a sixth', label: 'And a sixth one - (info)', variant: 'info' },
  { id: 'And a seventh', label: 'And a seventh one - (light)', variant: 'light' },
  { id: 'And a eighth', label: 'And a eighth one - (dark)', variant: 'dark' },
]

export const ACTIVE_LIST_ARRAY = [
  { id: 'An item', label: 'An item', active: false },
  { id: 'A second item', label: 'A second item', active: true },
  { id: 'A third item', label: 'A third item', active: false },
  { id: 'A fourth item', label: 'A fourth item', active: false },
  { id: 'And a fifth', label: 'And a fifth one', active: false },
]

export const DISABLE_LIST_ARRAY = [
  { id: 'An item', label: 'An item', disabled: false },
  { id: 'A second item', label: 'A second item', disabled: true },
  { id: 'A third item', label: 'A third item', disabled: false },
  { id: 'A fourth item', label: 'A fourth item', disabled: false },
  { id: 'And a fifth', label: 'And a fifth one', disabled: false },
]

export const BADGE_LIST_ARRAY = [
  { id: 'An item', label: 'An item', badgeContent: 1 },
  { id: 'A second item', label: 'A second item', badgeContent: 2 },
  { id: 'A third item', label: 'A third item', badgeContent: 3 },
  { id: 'A fourth item', label: 'A fourth item', badgeContent: 12 },
  { id: 'And a fifth', label: 'And a fifth one', badgeContent: 11 },
]

export const DISTINCT_BADGE_LIST_ARRAY = [
  { id: 'An item', label: 'An item - (primary)', badgeContent: '2', badgeProps: { variant: 'primary' } },
  {
    id: 'A second item',
    label: 'A second item - (secondary)',
    badgeContent: '4',
    badgeProps: { variant: 'secondary' }
  },
  { id: 'A third item', label: 'A third item - (success)', badgeContent: '3', badgeProps: { variant: 'success' } },
  { id: 'A fourth item', label: 'A fourth item - (danger)', badgeContent: '5', badgeProps: { variant: 'danger' } },
  { id: 'And a fifth', label: 'And a fifth one - (warning)', badgeContent: '7', badgeProps: { variant: 'warning' } },
  { id: 'And a sixth', label: 'And a sixth one - (info)', badgeContent: '1', badgeProps: { variant: 'info' } },
  { id: 'And a seventh', label: 'And a seventh one - (light)', badgeContent: '9', badgeProps: { variant: 'light' } },
  { id: 'And a eighth', label: 'And a eighth one - (dark)', badgeContent: '8', badgeProps: { variant: 'dark' } },
]

export const SUB_LABEL_LIST_ARRAY = [
  {
    active: false,
    disabled: false,
    id: 'An item',
    subLabel: 'Lorem ipsum dolor sit amet,',
    label: 'An item',
    badgeContent: '2',
    badgeProps: { variant: 'primary' }
  },
  {
    active: true,
    disabled: false,
    id: 'A second item',
    subLabel: 'Lorem ipsum dolor sit amet,',
    label: 'A second item - (active)',
    badgeContent: '4',
    badgeProps: { variant: 'secondary' }
  },
  {
    active: false,
    disabled: false,
    id: 'A third item',
    subLabel: 'Lorem ipsum dolor sit amet,',
    label: 'A third item',
    badgeContent: '3',
    badgeProps: { variant: 'success' }
  },
  {
    active: false,
    disabled: true,
    id: 'A fourth item',
    subLabel: 'Lorem ipsum dolor sit amet,',
    label: 'A fourth item - (disabled)',
    badgeContent: '5',
    badgeProps: { variant: 'danger' }
  },
  {
    active: false,
    disabled: false,
    id: 'And a fifth',
    subLabel: 'Lorem ipsum dolor sit amet,',
    label: 'A fifth one',
    badgeContent: '7',
    badgeProps: { variant: 'warning' }
  },
  {
    active: false,
    disabled: false,
    id: 'And a sixth',
    subLabel: 'Lorem ipsum dolor sit amet,',
    label: 'A sixth one',
    badgeContent: '1',
    badgeProps: { variant: 'info' }
  },
  {
    active: false,
    disabled: false,
    id: 'And a seventh',
    subLabel: 'Lorem ipsum dolor sit amet,',
    label: 'A seventh one',
    badgeContent: '9',
    badgeProps: { variant: 'light' }
  },
  {
    active: false,
    disabled: false,
    id: 'And a eighth',
    subLabel: 'Lorem ipsum dolor sit amet,',
    label: 'An eighth one',
    badgeContent: '8',
    badgeProps: { variant: 'dark' }
  },
]