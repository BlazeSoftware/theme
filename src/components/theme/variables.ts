export type VariableType = 'color' | 'plain';

export type VariableGroup = {
  heading: string;
  variables: { name: string; type?: VariableType }[];
};

const variables: Record<string, VariableGroup[]> = {
  COLORS: [
    { heading: 'Text', variables: [{ name: '--color-text' }, { name: '--color-quiet' }] },
    { heading: 'Colors', variables: [{ name: '--color-brand' }, { name: '--color-info' }, { name: '--color-warning' }, { name: '--color-success' }, { name: '--color-error' }] },
  ],
  ALERTS: [
    { heading: 'Default', variables: [{ name: '--alert-color' }, { name: '--alert-background' }, { name: '--alert-close-color' }] },
    { heading: 'Brand', variables: [{ name: '--alert-color--brand' }, { name: '--alert-background--brand' }, { name: '--alert-close-color--brand' }] },
    { heading: 'Info', variables: [{ name: '--alert-color--info' }, { name: '--alert-background--info' }, { name: '--alert-close-color--info' }] },
    { heading: 'Warning', variables: [{ name: '--alert-color--warning' }, { name: '--alert-background--warning' }, { name: '--alert-close-color--warning' }] },
    { heading: 'Success', variables: [{ name: '--alert-color--success' }, { name: '--alert-background--success' }, { name: '--alert-close-color--success' }] },
    { heading: 'Error', variables: [{ name: '--alert-color--error' }, { name: '--alert-background--error' }, { name: '--alert-close-color--error' }] },
    {
      heading: 'Links',
      variables: [
        { name: '--alert-link-color' },
        { name: '--alert-link-color--brand' },
        { name: '--alert-link-color--info' },
        { name: '--alert-link-color--warning' },
        { name: '--alert-link-color--success' },
        { name: '--alert-link-color--error' },
      ],
    },
  ],
  AVATARS: [{ heading: 'Default', variables: [{ name: '--avatar-color' }, { name: '--avatar-background' }, { name: '--avatar-border-radius', type: 'plain' }] }],
  BADGES: [
    { heading: 'Default', variables: [{ name: '--badge-color' }, { name: '--badge-background' }, { name: '--badge-border-color' }] },
    { heading: 'Brand', variables: [{ name: '--badge-color--brand' }, { name: '--badge-background--brand' }, { name: '--badge-border-color--brand' }] },
    { heading: 'Info', variables: [{ name: '--badge-color--info' }, { name: '--badge-background--info' }, { name: '--badge-border-color--info' }] },
    { heading: 'Warning', variables: [{ name: '--badge-color--warning' }, { name: '--badge-background--warning' }, { name: '--badge-border-color--warning' }] },
    { heading: 'Success', variables: [{ name: '--badge-color--success' }, { name: '--badge-background--success' }, { name: '--badge-border-color--success' }] },
    { heading: 'Error', variables: [{ name: '--badge-color--error' }, { name: '--badge-background--error' }, { name: '--badge-border-color--error' }] },
    { heading: 'Ghost', variables: [{ name: '--badge-color--ghost' }, { name: '--badge-border-color--ghost' }] },
    { heading: 'Ghost - Brand', variables: [{ name: '--badge-color--brand-ghost' }, { name: '--badge-border-color--brand-ghost' }] },
    { heading: 'Ghost - Info', variables: [{ name: '--badge-color--info-ghost' }, { name: '--badge-border-color--info-ghost' }] },
    { heading: 'Ghost - Warning', variables: [{ name: '--badge-color--warning-ghost' }, { name: '--badge-border-color--warning-ghost' }] },
    { heading: 'Ghost - Success', variables: [{ name: '--badge-color--success-ghost' }, { name: '--badge-border-color--success-ghost' }] },
    { heading: 'Ghost - Error', variables: [{ name: '--badge-color--error-ghost' }, { name: '--badge-border-color--error-ghost' }] },
  ],
  BUTTONS: [
    {
      heading: 'Default',
      variables: [{ name: '--button-color' }, { name: '--button-color--close' }, { name: '--button-background' }, { name: '--button-border-radius', type: 'plain' }],
    },
    { heading: 'Brand', variables: [{ name: '--button-color--brand' }, { name: '--button-background--brand' }] },
    { heading: 'Info', variables: [{ name: '--button-color--info' }, { name: '--button-background--info' }] },
    { heading: 'Warning', variables: [{ name: '--button-color--warning' }, { name: '--button-background--warning' }] },
    { heading: 'Success', variables: [{ name: '--button-color--success' }, { name: '--button-background--success' }] },
    { heading: 'Error', variables: [{ name: '--button-color--error' }, { name: '--button-background--error' }] },
    { heading: 'Ghost', variables: [{ name: '--button-color--ghost' }, { name: '--button-color--ghost-hover' }, { name: '--button-background--ghost' }] },
    { heading: 'Ghost - Brand', variables: [{ name: '--button-color--brand-ghost' }, { name: '--button-color--brand-ghost-hover' }, { name: '--button-background--brand-ghost' }] },
    { heading: 'Ghost - Info', variables: [{ name: '--button-color--info-ghost' }, { name: '--button-color--info-ghost-hover' }, { name: '--button-background--info-ghost' }] },
    {
      heading: 'Ghost - Warning',
      variables: [{ name: '--button-color--warning-ghost' }, { name: '--button-color--warning-ghost-hover' }, { name: '--button-background--warning-ghost' }],
    },
    {
      heading: 'Ghost - Success',
      variables: [{ name: '--button-color--success-ghost' }, { name: '--button-color--success-ghost-hover' }, { name: '--button-background--success-ghost' }],
    },
    { heading: 'Ghost - Error', variables: [{ name: '--button-color--error-ghost' }, { name: '--button-color--error-ghost-hover' }, { name: '--button-background--error-ghost' }] },
  ],
  CALENDARS: [
    { heading: 'Default', variables: [{ name: '--calendar-background' }, { name: '--calendar-control-color' }, { name: '--calendar-control-background' }] },
    { heading: 'Date', variables: [{ name: '--calendar-control-color--date' }, { name: '--calendar-control-background--date' }] },
    { heading: 'In month', variables: [{ name: '--calendar-control-color--in-month' }, { name: '--calendar-control-background--in-month' }] },
    {
      heading: 'Current',
      variables: [{ name: '--calendar-control-color--current' }, { name: '--calendar-control-background--current' }, { name: '--calendar-control-border-color--current' }],
    },
    {
      heading: 'Selected',
      variables: [{ name: '--calendar-control-color--selected' }, { name: '--calendar-control-background--selected' }, { name: '--calendar-control-border-color--selected' }],
    },
    { heading: 'Hover', variables: [{ name: '--calendar-control-color--hover' }, { name: '--calendar-control-background--hover' }] },
  ],
  CARDS: [
    { heading: 'Default', variables: [{ name: '--card-background' }] },
    { heading: 'Item', variables: [{ name: '--card-item-color' }, { name: '--card-item-background' }] },
    { heading: 'Divider', variables: [{ name: '--card-item-color--divider' }, { name: '--card-item-background--divider' }] },
    { heading: 'Brand', variables: [{ name: '--card-item-color--brand' }, { name: '--card-item-background--brand' }] },
    { heading: 'Info', variables: [{ name: '--card-item-color--info' }, { name: '--card-item-background--info' }] },
    { heading: 'Warning', variables: [{ name: '--card-item-color--warning' }, { name: '--card-item-background--warning' }] },
    { heading: 'Success', variables: [{ name: '--card-item-color--success' }, { name: '--card-item-background--success' }] },
    { heading: 'Error', variables: [{ name: '--card-item-color--error' }, { name: '--card-item-background--error' }] },
    { heading: 'Control', variables: [{ name: '--card-control-color' }, { name: '--card-control-background' }] },
  ],
  MENUS: [{ heading: 'Default', variables: [{ name: '--card-control-color--menu' }, { name: '--card-control-background--menu' }, { name: '--card-menu-border', type: 'plain' }] }],
  MODALS: [
    { heading: 'Default', variables: [{ name: '--modal-background' }, { name: '--modal-close-color' }, { name: '--modal-border-radius', type: 'plain' }] },
    { heading: 'Ghost', variables: [{ name: '--modal-background--ghost' }, { name: '--modal-close-color--ghost' }] },
  ],
  DIVIDERS: [{ heading: 'Default', variables: [{ name: '--divider-color' }] }],
  FILEUPLOAD: [{ heading: 'Default', variables: [{ name: '--file-upload-background' }, { name: '--file-upload-border', type: 'plain' }] }],
  PAGINATION: [{ heading: 'Default', variables: [{ name: '--pagination-color' }, { name: '--pagination-background' }, { name: '--pagination-border-radius' }] }],
  TOOLTIPS: [{ heading: 'Default', variables: [{ name: '--tooltip-color' }, { name: '--tooltip-background' }, { name: '--tooltip-border-radius', type: 'plain' }] }],
  TREES: [{ heading: 'Default', variables: [{ name: '--tree-item-color' }, { name: '--tree-item-expandable-color' }, { name: '--tree-item-expanded-color' }] }],
};
export default variables;
