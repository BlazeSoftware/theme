import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-tabs',
})
export class ComponentsTabs {
  render() {
    return (
      <blaze-tabs>
        <blaze-tab header="One" open>
          This is tab one
        </blaze-tab>
        <blaze-tab type="brand" header="Two">
          This is tab two
        </blaze-tab>
        <blaze-tab type="info" header="Three">
          This is tab three
        </blaze-tab>
        <blaze-tab type="warning" header="Four">
          This is tab four
        </blaze-tab>
        <blaze-tab type="success" header="Five">
          This is tab five
        </blaze-tab>
        <blaze-tab type="error" header="Six">
          This is tab six
        </blaze-tab>
        <blaze-tab disabled type="error" header="Seven">
          Disabled
        </blaze-tab>
      </blaze-tabs>
    );
  }
}
