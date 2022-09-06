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
        <p class="c-paragraph u-large u-text--highlight">This is highlighted text.</p>
        <p><button type="button" class="c-button u-large c-button--brand">brand</button></p>
        <p><button type="button" class="c-button u-large c-button--info">info</button></p>
        <p><button type="button" class="c-button u-large c-button--warning">warning</button></p>
        <p><button type="button" class="c-button u-large c-button--success">success</button></p>
        <p><button type="button" class="c-button u-large c-button--error">error</button></p>
      </div>
    );
  }
}
