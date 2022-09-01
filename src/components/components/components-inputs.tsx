import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-inputs',
})
export class ComponentsInputs {
  render() {
    return (
      <fieldset class="o-fieldset">
        <div class="o-form-element">
          <label class="c-label" htmlFor="houseno">
            Address line 1:
          </label>
          <input id="houseno" placeholder="House name or number" class="c-field" />
        </div>
        <label class="c-label o-form-element">
          Postcode:
          <input class="c-field c-field--label" placeholder="e.g. AB12 3CD" />
          <div role="tooltip" class="c-hint">
            e.g. AB12 3CD
          </div>
        </label>
      </fieldset>
    );
  }
}
