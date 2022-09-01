import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-toggles',
})
export class ComponentsToggles {
  render() {
    return (
      <div>
        <blaze-toggle toggled>Default</blaze-toggle>
        <blaze-toggle toggled type="brand">
          Brand
        </blaze-toggle>
        <blaze-toggle toggled type="info">
          Info
        </blaze-toggle>
        <blaze-toggle toggled type="warning">
          Warning
        </blaze-toggle>
        <blaze-toggle toggled type="success">
          Success
        </blaze-toggle>
        <blaze-toggle toggled type="error">
          Error
        </blaze-toggle>
      </div>
    );
  }
}
