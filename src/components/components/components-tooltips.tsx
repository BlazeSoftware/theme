import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-tooltips',
})
export class ComponentsTooltips {
  render() {
    return (
      <span class="c-badge c-badge--brand c-tooltip c-tooltip--right" aria-label="This is a tooltip, hello">
        Hover over me...
      </span>
    );
  }
}
