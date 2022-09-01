import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-divider',
})
export class ComponentsDivider {
  render() {
    return (
      <div>
        <blaze-divider>Hello, world</blaze-divider>
        <blaze-divider type="dashed">Dashed</blaze-divider>
        <blaze-divider type="dotted">Dotted</blaze-divider>
      </div>
    );
  }
}
