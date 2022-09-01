import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-pagination',
})
export class ComponentsPagination {
  render() {
    return <blaze-pagination pages={15} page={4}></blaze-pagination>;
  }
}
