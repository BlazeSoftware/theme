import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-buttons',
})
export class ComponentsButtons {
  render() {
    return (
      <div>
        <button type="button" class="c-button u-large">
          Button
        </button>
        <button type="button" class="c-button u-large c-button--brand">
          Button
        </button>
        <button type="button" class="c-button u-large c-button--info">
          Button
        </button>
        <button type="button" class="c-button u-large c-button--warning">
          Button
        </button>
        <button type="button" class="c-button u-large c-button--success">
          Button
        </button>
        <button type="button" class="c-button u-large c-button--error">
          Button
        </button>
        <br />
        <br />
        <button type="button" class="c-button c-button--rounded u-large">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded u-large c-button--brand">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded u-large c-button--info">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded u-large c-button--warning">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded u-large c-button--success">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded u-large c-button--error">
          Button
        </button>
        <br />
        <br />
        <button type="button" class="c-button c-button--ghost u-large">
          Button
        </button>
        <button type="button" class="c-button c-button--ghost u-large c-button--brand">
          Button
        </button>
        <button type="button" class="c-button c-button--ghost u-large c-button--info">
          Button
        </button>
        <button type="button" class="c-button c-button--ghost u-large c-button--warning">
          Button
        </button>
        <button type="button" class="c-button c-button--ghost u-large c-button--success">
          Button
        </button>
        <button type="button" class="c-button c-button--ghost u-large c-button--error">
          Button
        </button>
        <br />
        <br />
        <button type="button" class="c-button c-button--rounded c-button--ghost u-large">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--ghost u-large c-button--brand">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--ghost u-large c-button--info">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--ghost u-large c-button--warning">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--ghost u-large c-button--success">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--ghost u-large c-button--error">
          Button
        </button>
      </div>
    );
  }
}
