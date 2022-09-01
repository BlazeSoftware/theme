import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-timelines',
})
export class ComponentsTimelines {
  render() {
    return (
      <blaze-timeline loading alternate>
        <blaze-timeline-item left>Nothing</blaze-timeline-item>
        <blaze-timeline-item type="brand">
          Big bang
          <p class="c-paragraph">Widely considered to be how the universe began</p>
        </blaze-timeline-item>
        <blaze-timeline-item left type="info">Galaxies go everywhere</blaze-timeline-item>
        <blaze-timeline-item type="warning">Solar systems form</blaze-timeline-item>
        <blaze-timeline-item left type="success">Earth appears</blaze-timeline-item>
        <blaze-timeline-item type="error">Human infestation occurs!</blaze-timeline-item>
        <blaze-timeline-item left last>All this has happened before and will happen again</blaze-timeline-item>
        <blaze-timeline-item loading>Evolution</blaze-timeline-item>
      </blaze-timeline>
    );
  }
}
