import variables from 'components/theme/variables';
import { Route } from './types';

export const componentsRoutes: Route[] = [
  {
    anchor: 'utils-colors',
    component: 'utils-colors',
    name: 'Colors',
    variables: variables.COLORS,
  },
  {
    anchor: 'components-alerts',
    component: 'components-alerts',
    name: 'Alerts & Toasts',
    variables: variables.ALERTS,
  },
  {
    anchor: 'components-autocomplete',
    component: 'components-autocomplete',
    name: 'Autocomplete',
  },
  {
    anchor: 'components-avatars',
    component: 'components-avatars',
    name: 'Avatars',
    variables: variables.AVATARS,
  },
  {
    anchor: 'components-badges',
    component: 'components-badges',
    name: 'Badges',
    variables: variables.BADGES,
  },
  {
    anchor: 'components-buttons',
    component: 'components-buttons',
    name: 'Buttons',
    variables: variables.BUTTONS,
  },
  {
    anchor: 'components-calendars',
    component: 'components-calendars',
    name: 'Calendars',
    variables: variables.CALENDARS,
  },
  {
    anchor: 'components-cards',
    component: 'components-cards',
    name: 'Cards',
    variables: variables.CARDS,
  },
  {
    anchor: 'components-menus',
    component: 'components-menus',
    name: 'Menus',
    variables: variables.MENUS,
  },
  {
    anchor: 'objects-modals',
    component: 'objects-modals',
    name: 'Modals',
    variables: variables.MODALS,
  },
  {
    anchor: 'components-divider',
    component: 'components-divider',
    name: 'Divider',
    variables: variables.DIVIDERS
  },
  {
    anchor: 'components/file-upload',
    component: 'components-file-upload',
    name: 'File Upload',
    variables: variables.FILEUPLOAD
  },
  {
    anchor: 'components-inputs',
    component: 'components-inputs',
    name: 'Inputs',
  },
  {
    anchor: 'components-pagination',
    component: 'components-pagination',
    name: 'Pagination',
    variables: variables.PAGINATION
  },
  {
    anchor: 'components-progress',
    component: 'components-progress',
    name: 'Progress',
  },
  {
    anchor: 'components-ranges',
    component: 'components-ranges',
    name: 'Ranges',
  },
  {
    anchor: 'components-tables',
    component: 'components-tables',
    name: 'Tables',
  },
  {
    anchor: 'components-tabs',
    component: 'components-tabs',
    name: 'Tabs',
  },
  {
    anchor: 'components-timelines',
    component: 'components-timelines',
    name: 'Timelines',
  },
  {
    anchor: 'components-toggles',
    component: 'components-toggles',
    name: 'Toggles',
  },
  {
    anchor: 'components-tooltips',
    component: 'components-tooltips',
    name: 'Tooltips',
    variables: variables.TOOLTIPS
  },
  {
    anchor: 'components-trees',
    component: 'components-trees',
    name: 'Trees',
    variables: variables.TREES
  },
  {
    anchor: 'components-typography',
    component: 'components-typography',
    name: 'Typography',
  },
];

export const allRoutes = [
  {
    title: 'Components',
    description: 'Fully styled atomic features',
    routes: componentsRoutes,
  },
];
