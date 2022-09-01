import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-alerts',
})
export class ComponentsAlerts {


  render() {
    return (
      <div>
        <blaze-alert open dismissible>
          Default - <a href="" class="c-link">this is a link</a>
        </blaze-alert>
        <blaze-alert open dismissible type="brand">
          Brand - <a href="" class="c-link">this is a link</a>
        </blaze-alert>
        <blaze-alert open dismissible type="info">
          Info - <a href="" class="c-link">this is a link</a>
        </blaze-alert>
        <blaze-alert open dismissible type="warning">
          Warning - <a href="" class="c-link">this is a link</a>
        </blaze-alert>
        <blaze-alert open dismissible type="success">
          Success - <a href="" class="c-link">this is a link</a>
        </blaze-alert>
        <blaze-alert open type="error">
          Error (also not dismissible) - <a href="" class="c-link">this is a link</a>
        </blaze-alert>
      </div>
    );
  }
}
