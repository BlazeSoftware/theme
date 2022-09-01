import { h, Component } from '@stencil/core';

@Component({
  tag: 'utils-colors',
})
export class UtilsColors {
  render() {
    return (
      <div>
        <p class="c-paragraph u-large">This is some example text.</p>
        <p class="c-paragraph u-large u-text--quiet">This is some example text.</p>
        <p><button type="button" class="c-button u-super c-button--brand" />
        &nbsp;&nbsp;brand</p>
        <p><button type="button" class="c-button u-super c-button--info" />
        &nbsp;&nbsp;info</p>
        <p><button type="button" class="c-button u-super c-button--warning" />
        &nbsp;&nbsp;warning</p>
        <p><button type="button" class="c-button u-super c-button--success" />
        &nbsp;&nbsp;success</p>
        <p><button type="button" class="c-button u-super c-button--error" />
        &nbsp;&nbsp;error</p>
      </div>
    );
  }
}
