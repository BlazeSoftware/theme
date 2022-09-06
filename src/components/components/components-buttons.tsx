import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-buttons',
})
export class ComponentsButtons {
  render() {
    return (
      <div>
        <button type="button" class="c-button">
          Button
        </button>
        <button type="button" class="c-button c-button--brand">
          Button
        </button>
        <button type="button" class="c-button c-button--info">
          Button
        </button>
        <button type="button" class="c-button c-button--warning">
          Button
        </button>
        <button type="button" class="c-button c-button--success">
          Button
        </button>
        <button type="button" class="c-button c-button--error">
          Button
        </button>
        <br />
        <br />
        <button type="button" class="c-button c-button--rounded">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--brand">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--info">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--warning">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--success">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--error">
          Button
        </button>
        <br />
        <br />
        <button type="button" class="c-button c-button--ghost">
          Button
        </button>
        <button type="button" class="c-button c-button--ghost c-button--brand">
          Button
        </button>
        <button type="button" class="c-button c-button--ghost c-button--info">
          Button
        </button>
        <button type="button" class="c-button c-button--ghost c-button--warning">
          Button
        </button>
        <button type="button" class="c-button c-button--ghost c-button--success">
          Button
        </button>
        <button type="button" class="c-button c-button--ghost c-button--error">
          Button
        </button>
        <br />
        <br />
        <button type="button" class="c-button c-button--rounded c-button--ghost">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--ghost c-button--brand">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--ghost c-button--info">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--ghost c-button--warning">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--ghost c-button--success">
          Button
        </button>
        <button type="button" class="c-button c-button--rounded c-button--ghost c-button--error">
          Button
        </button>
      </div>
    );
  }
}
