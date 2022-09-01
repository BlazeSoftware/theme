import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-badges',
})
export class ComponentsBadges {


  render() {
    return (
      <div>
        <blaze-badge>default</blaze-badge>
        <blaze-badge type="brand">brand</blaze-badge>
        <blaze-badge type="info">info</blaze-badge>
        <blaze-badge type="warning">warning</blaze-badge>
        <blaze-badge type="success">success</blaze-badge>
        <blaze-badge type="error">error</blaze-badge>
        <br />
        <br />
        <blaze-badge rounded>default</blaze-badge>
        <blaze-badge rounded type="brand">
          brand
        </blaze-badge>
        <blaze-badge rounded type="info">
          info
        </blaze-badge>
        <blaze-badge rounded type="warning">
          warning
        </blaze-badge>
        <blaze-badge rounded type="success">
          success
        </blaze-badge>
        <blaze-badge rounded type="error">
          error
        </blaze-badge>
        <br />
        <br />
        <blaze-badge ghost rounded>
          default
        </blaze-badge>
        <blaze-badge ghost rounded type="brand">
          brand
        </blaze-badge>
        <blaze-badge ghost rounded type="info">
          info
        </blaze-badge>
        <blaze-badge ghost rounded type="warning">
          warning
        </blaze-badge>
        <blaze-badge ghost rounded type="success">
          success
        </blaze-badge>
        <blaze-badge ghost rounded type="error">
          error
        </blaze-badge>
      </div>
    );
  }
}
