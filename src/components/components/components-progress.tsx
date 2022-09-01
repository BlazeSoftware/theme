import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-progress',
})
export class ComponentsProgress {
  render() {
    return (
      <div>
        <blaze-progress size="xsmall" rounded>
          <blaze-progress-bar value={10}>10%</blaze-progress-bar>
        </blaze-progress>
        <br />
        <blaze-progress size="small">
          <blaze-progress-bar value={20} type="brand">
            20%
          </blaze-progress-bar>
        </blaze-progress>
        <br />
        <blaze-progress size="medium" rounded>
          <blaze-progress-bar value={35} type="info">
            35%
          </blaze-progress-bar>
        </blaze-progress>
        <br />
        <blaze-progress size="large">
          <blaze-progress-bar value={65} type="warning">
            65%
          </blaze-progress-bar>
        </blaze-progress>
        <br />
        <blaze-progress size="xlarge" rounded>
          <blaze-progress-bar value={80} type="success">
            80%
          </blaze-progress-bar>
        </blaze-progress>
        <br />
        <blaze-progress size="super">
          <blaze-progress-bar value={100} type="error">
            100%
          </blaze-progress-bar>
        </blaze-progress>
      </div>
    );
  }
}
