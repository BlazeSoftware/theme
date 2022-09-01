import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-ranges',
})
export class ComponentsRanges {
  render() {
    return (
      <div>
        <input type="range" class="c-range" />
        <input type="range" class="c-range c-range--brand" />
        <input type="range" class="c-range c-range--info" />
        <input type="range" class="c-range c-range--warning" />
        <input type="range" class="c-range c-range--success" />
        <input type="range" class="c-range c-range--error" />
        <input type="range" class="c-range" disabled />
      </div>
    );
  }
}
