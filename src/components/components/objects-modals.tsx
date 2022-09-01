import { h, Component } from '@stencil/core';

@Component({
  tag: 'objects-modals',
})
export class ObjectsModals {
  render() {
    return [
      <div class="modal-demo">
        <blaze-modal open dismissible>
          <blaze-card>
            <blaze-card-header>
              <h2 class="c-heading u-xlarge">
                Default Modal
                <div class="c-heading__sub">Sub-heading</div>
              </h2>
            </blaze-card-header>
            <blaze-card-body>
              <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
            </blaze-card-body>
            <blaze-card-footer>
              <div class="c-input-group">
                <button class="c-button c-button--block c-button--brand">Button</button>
                <button class="c-button c-button--block c-button--info">Button</button>
              </div>
            </blaze-card-footer>
          </blaze-card>
        </blaze-modal>
      </div>,
      <div class="modal-demo">
        <blaze-modal open dismissible ghost>
          <blaze-card>
            <blaze-card-header>
              <h2 class="c-heading u-xlarge">
                Ghost Modal
                <div class="c-heading__sub">Sub-heading</div>
              </h2>
            </blaze-card-header>
            <blaze-card-body>
              <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
            </blaze-card-body>
            <blaze-card-footer>
              <div class="c-input-group">
                <button class="c-button c-button--block c-button--brand">Button</button>
                <button class="c-button c-button--block c-button--info">Button</button>
              </div>
            </blaze-card-footer>
          </blaze-card>
        </blaze-modal>
      </div>,
    ];
  }
}
