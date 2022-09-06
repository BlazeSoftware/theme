export type VariableType = 'color' | 'plain';

export type VariableGroup = {
  heading: string;
  variables: { name: string; type?: VariableType }[];
};

const variables: Record<string, VariableGroup[]> = {
  COLORS: [
    {
      heading: 'Background',
      variables: [{ name: '--color-background' }, { name: '--color-background-offset' }, { name: '--color-background-offset-2' }],
    },
    { heading: 'Colors', variables: [{ name: '--color-brand' }, { name: '--color-info' }, { name: '--color-warning' }, { name: '--color-success' }, { name: '--color-error' }] },
    {
      heading: 'Text',
      variables: [{ name: '--color-text' }, { name: '--color-quiet' }],
    },
    {
      heading: 'Text Colors',
      variables: [
        { name: '--color-text-brand' },
        { name: '--color-text-info' },
        { name: '--color-text-warning' },
        { name: '--color-text-success' },
        { name: '--color-text-error' },
      ],
    },
    ,
    { heading: 'Borders', variables: [{ name: '--border-color' }] },
  ],
  ALERTS: [
    { heading: 'Overrides', variables: [{ name: '--alert-color' }, { name: '--alert-background' }, { name: '--alert-close-color' }] },
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
  AVATARS: [{ heading: 'Overrides', variables: [{ name: '--avatar-color' }, { name: '--avatar-background' }, { name: '--avatar-border-radius', type: 'plain' }] }],
  BADGES: [
    { heading: 'Overrides', variables: [{ name: '--badge-color' }, { name: '--badge-background' }, { name: '--badge-border-color' }] },
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
    { heading: 'Overrides', variables: [{ name: '--calendar-background' }, { name: '--calendar-control-color' }, { name: '--calendar-control-background' }] },
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
    { heading: 'Overrides', variables: [{ name: '--card-background' }] },
    { heading: 'Item', variables: [{ name: '--card-item-color' }, { name: '--card-item-background' }] },
    { heading: 'Divider', variables: [{ name: '--card-item-color--divider' }, { name: '--card-item-background--divider' }] },
    { heading: 'Brand', variables: [{ name: '--card-item-color--brand' }, { name: '--card-item-background--brand' }] },
    { heading: 'Info', variables: [{ name: '--card-item-color--info' }, { name: '--card-item-background--info' }] },
    { heading: 'Warning', variables: [{ name: '--card-item-color--warning' }, { name: '--card-item-background--warning' }] },
    { heading: 'Success', variables: [{ name: '--card-item-color--success' }, { name: '--card-item-background--success' }] },
    { heading: 'Error', variables: [{ name: '--card-item-color--error' }, { name: '--card-item-background--error' }] },
    { heading: 'Control', variables: [{ name: '--card-control-color' }, { name: '--card-control-background' }] },
  ],
  MENUS: [
    { heading: 'Overrides', variables: [{ name: '--card-control-color--menu' }, { name: '--card-control-background--menu' }, { name: '--card-menu-border', type: 'plain' }] },
  ],
  MODALS: [
    { heading: 'Overrides', variables: [{ name: '--modal-background' }, { name: '--modal-close-color' }, { name: '--modal-border-radius', type: 'plain' }] },
    { heading: 'Ghost', variables: [{ name: '--modal-background--ghost' }, { name: '--modal-close-color--ghost' }] },
  ],
  DIVIDERS: [{ heading: 'Overrides', variables: [{ name: '--divider-color' }] }],
  FILEUPLOAD: [{ heading: 'Overrides', variables: [{ name: '--file-upload-background' }, { name: '--file-upload-border', type: 'plain' }] }],
  INPUTS: [
    { heading: 'Overrides', variables: [{ name: '--field-color' }, { name: '--field-background' }] },
    { heading: 'Border', variables: [{ name: '--field-border', type: 'plain' }] },
  ],
  PAGINATION: [{ heading: 'Overrides', variables: [{ name: '--pagination-color' }, { name: '--pagination-background' }, { name: '--pagination-border-radius' }] }],
  PROGRESS: [
    { heading: 'Overrides', variables: [{ name: '--progress-bar-background' }, { name: '--progress-bar-color' }, { name: '--progress-background' }] },
    { heading: 'Brand', variables: [{ name: '--progress-bar-background--brand' }, { name: '--progress-bar-color--brand' }, { name: '--progress-background--brand' }] },
    { heading: 'Info', variables: [{ name: '--progress-bar-background--info' }, { name: '--progress-bar-color--info' }, { name: '--progress-background--info' }] },
    { heading: 'Warning', variables: [{ name: '--progress-bar-background--warning' }, { name: '--progress-bar-color--warning' }, { name: '--progress-background--warning' }] },
    { heading: 'Success', variables: [{ name: '--progress-bar-background--success' }, { name: '--progress-bar-color--success' }, { name: '--progress-background--success' }] },
    { heading: 'Error', variables: [{ name: '--progress-bar-background--error' }, { name: '--progress-bar-color--error' }, { name: '--progress-background--error' }] },
    { heading: 'Border', variables: [{ name: '--progress-border-radius', type: 'plain' }] },
  ],
  RANGES: [
    { heading: 'Handle', variables: [{ name: '--range-handle-background' }, { name: '--range-handle-box-shadow' }, { name: '--range-handle-border-radius', type: 'plain' }] },
    { heading: 'Track', variables: [{ name: '--range-track-color' }, { name: '--range-track-border-radius', type: 'plain' }] },
    {
      heading: 'Colors',
      variables: [
        { name: '--range-track-color--brand' },
        { name: '--range-track-color--info' },
        { name: '--range-track-color--warning' },
        { name: '--range-track-color--success' },
        { name: '--range-track-color--error' },
      ],
    },
  ],
  TABLES: [
    {
      heading: 'Overrides',
      variables: [{ name: '--table-caption-color' }, { name: '--table-striped-background' }, { name: '--table-heading-background' }, { name: '--table-heading-border' }],
    },
    { heading: 'Rows', variables: [{ name: '--table-row-color' }, { name: '--table-row-background' }] },
    { heading: 'Clickable', variables: [{ name: '--table-row-color--clickable' }, { name: '--table-row-background--clickable' }] },
    { heading: 'Disabled', variables: [{ name: '--table-row-color--disabled' }, { name: '--table-row-background--disabled' }] },
  ],
  TABS: [
    { heading: 'Overrides', variables: [{ name: '--tab-heading-color' }, { name: '--tab-heading-background' }, { name: '--tab-heading-border-color' }] },
    { heading: 'Active', variables: [{ name: '--tab-heading-color--active' }, { name: '--tab-heading-background--active' }, { name: '--tab-heading-border-color--active' }] },
    { heading: 'Hover', variables: [{ name: '--tab-heading-color--hover' }, { name: '--tab-heading-background--hover' }, { name: '--tab-heading-border-color--hover' }] },
    { heading: 'Brand', variables: [{ name: '--tab-heading-color--brand' }, { name: '--tab-heading-background--brand' }, { name: '--tab-heading-border-color--brand' }] },
    { heading: 'Info', variables: [{ name: '--tab-heading-color--info' }, { name: '--tab-heading-background--info' }, { name: '--tab-heading-border-color--info' }] },
    { heading: 'Warning', variables: [{ name: '--tab-heading-color--warning' }, { name: '--tab-heading-background--warning' }, { name: '--tab-heading-border-color--warning' }] },
    { heading: 'Success', variables: [{ name: '--tab-heading-color--success' }, { name: '--tab-heading-background--success' }, { name: '--tab-heading-border-color--success' }] },
    { heading: 'Error', variables: [{ name: '--tab-heading-color--error' }, { name: '--tab-heading-background--error' }, { name: '--tab-heading-border-color--error' }] },
    { heading: 'Border', variables: [{ name: '--tab-heading-border-radius', type: 'plain' }] },
  ],
  TIMELINES: [
    { heading: 'Overrides', variables: [{ name: '--timeline-item-color' }, { name: '--timeline-line-color' }, { name: '--timeline-spacing-color' }] },
    {
      heading: 'Colors',
      variables: [
        { name: '--timeline-item-color--brand' },
        { name: '--timeline-item-color--info' },
        { name: '--timeline-item-color--warning' },
        { name: '--timeline-item-color--success' },
        { name: '--timeline-item-color--error' },
      ],
    },
    { heading: 'Loading', variables: [{ name: '--timeline-item-color--loading' }] },
  ],
  TOGGLES: [
    {
      heading: 'Overrides',
      variables: [
        { name: '--toggle-track-color' },
        { name: '--toggle-track-color--unchecked' },
        { name: '--toggle-track-color--brand' },
        { name: '--toggle-track-color--info' },
        { name: '--toggle-track-color--warning' },
        { name: '--toggle-track-color--success' },
        { name: '--toggle-track-color--error' },
        { name: '--toggle-track-border-radius' },
      ],
    },
    {
      heading: 'Handle',
      variables: [{ name: '--toggle-handle-background' }, { name: '--toggle-handle-border-radius' }, { name: '--toggle-handle-box-shadow', type: 'plain' }],
    },
  ],
  TOOLTIPS: [{ heading: 'Overrides', variables: [{ name: '--tooltip-color' }, { name: '--tooltip-background' }, { name: '--tooltip-border-radius', type: 'plain' }] }],
  TREES: [{ heading: 'Overrides', variables: [{ name: '--tree-item-color' }, { name: '--tree-item-expandable-color' }, { name: '--tree-item-expanded-color' }] }],
  TYPOGRAPHY: [
    { heading: 'Links', variables: [{ name: '--link-color' }, { name: '--link-background' }, { name: '--link-background--hover' }] },
    {
      heading: 'Link Colors',
      variables: [
        { name: '--link-color--brand' },
        { name: '--link-background--brand' },
        { name: '--link-background--brand-hover' },

        { name: '--link-color--info' },
        { name: '--link-background--info' },
        { name: '--link-background--info-hover' },

        { name: '--link-color--warning' },
        { name: '--link-background--warning' },
        { name: '--link-background--warning-hover' },

        { name: '--link-color--success' },
        { name: '--link-background--success' },
        { name: '--link-background--success-hover' },

        { name: '--link-color--error' },
        { name: '--link-background--error' },
        { name: '--link-background--error-hover' },
      ],
    },
    { heading: 'Highlight', variables: [{ name: '--typography-highlight-color' }, { name: '--typography-highlight-background' }] },
    {
      heading: 'Code',
      variables: [
        { name: '--typography-code-color' },
        { name: '--typography-code-background' },
        { name: '--typography-code-border-color' },
        { name: '--typography-code-border-radius' },
      ],
    },
    {
      heading: 'Blockquotes',
      variables: [
        { name: '--typography-quotation-border-color' },
        { name: '--typography-quotation-border-color--brand' },
        { name: '--typography-quotation-border-color--info' },
        { name: '--typography-quotation-border-color--warning' },
        { name: '--typography-quotation-border-color--success' },
        { name: '--typography-quotation-border-color--error' },
        { name: '--typography-quotation-footer-color' },
      ],
    },
  ],
};
export default variables;
