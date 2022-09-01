import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-cards',
})
export class ComponentsCards {
  render() {
    return (
      <div>
        <blaze-card>
          <blaze-card-header>
            <h2 class="c-heading u-xlarge">
              Heading
              <div class="c-heading__sub">Sub-heading</div>
            </h2>
          </blaze-card-header>
          <blaze-card-body>
            <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>{' '}
          </blaze-card-body>
          <blaze-card-footer>
            <div class="c-input-group">
              <button class="c-button c-button--block c-button--brand">Button</button>
              <button class="c-button c-button--block c-button--info">Button</button>
            </div>
          </blaze-card-footer>
        </blaze-card>
        <br />
        <br />

        <section class="u-letter-box-large">
          <h3 class="c-heading u-xlarge">Items</h3>
          <div class="c-card">
            <div role="separator" class="c-card__item c-card__item--divider">
              Header
            </div>
            <div class="c-card__item  ">
              <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
              <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
            </div>
            <div role="separator" class="c-card__item c-card__item--divider">
              Divider
            </div>
            <div class="c-card__item">
              <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
              <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
            </div>
            <div role="separator" class="c-card__item c-card__item--divider">
              Footer
            </div>
          </div>
        </section>

        <section class="u-letter-box-large">
          <h3 class="c-heading u-xlarge">Dividers</h3>
          <div class="c-card">
            <div class="c-card__item">Item 1</div>
            <div class="c-card__item">Item 2</div>
            <div role="separator" class="c-card__item c-card__item--divider">
              Divider
            </div>
            <div class="c-card__item">Item 3</div>
            <div class="c-card__item">Item 4</div>
          </div>
        </section>

        <section class="u-letter-box-large">
          <h3 class="c-heading u-xlarge">Grouped</h3>
          <div class="c-card c-card--grouped">
            <div class="c-card__item">Item 1</div>
            <div class="c-card__item">Item 2</div>
            <div role="separator" class="c-card__divider"></div>
            <div class="c-card__item">Item 3</div>
            <div class="c-card__item">Item 4</div>
            <div class="c-card__item">Item 5</div>
            <div role="separator" class="c-card__divider"></div>
            <div class="c-card__item">Item 6</div>
            <div class="c-card__item">Item 7</div>
            <div class="c-card__item">Item 8</div>
          </div>
        </section>

        <section class="u-letter-box-large">
          <h3 class="c-heading u-xlarge">Accordions</h3>
          <blaze-accordion>
            <blaze-accordion-pane open header="Click me">
              This is an expanded accordion
            </blaze-accordion-pane>
            <blaze-accordion-pane header="Click me also">To toggle other panes</blaze-accordion-pane>
            <blaze-accordion-pane header="Click me also">To toggle other panes</blaze-accordion-pane>
            <blaze-accordion-pane header="Click me also">To toggle other panes</blaze-accordion-pane>
          </blaze-accordion>
        </section>
      </div>
    );
  }
}
