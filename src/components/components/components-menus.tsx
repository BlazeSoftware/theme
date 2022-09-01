import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-menus',
})
export class ComponentsMenus {
  render() {
    return (
      <div role="menu" class="c-card c-card--menu">
        <button role="menuitem" class="c-card__control">
          Menu 1
        </button>
        <button role="menuitem" class="c-card__control">
          Menu 2
        </button>
        <div role="separator" class="c-card__item c-card__item--divider">
          Divider
        </div>
        <button role="menuitem" class="c-card__control">
          Menu 3
        </button>
        <button role="menuitem" class="c-card__control">
          Menu 4
        </button>
        <button role="menuitem" class="c-card__control" disabled>
          Menu item disabled
        </button>
        <button role="menuitem" class="c-card__control c-card__control--active">
          Menu item active
        </button>
        <button role="menuitem" class="c-card__control">
          Menu 5
        </button>
        <button role="menuitem" class="c-card__control">
          Menu 6
        </button>
        <button role="menuitem" class="c-card__control">
          Menu 7
        </button>
        <button role="menuitem" class="c-card__control">
          Menu 8
        </button>
        <button role="menuitem" class="c-card__control">
          Menu 9
        </button>
        <button role="menuitem" class="c-card__control">
          Menu 10
        </button>
      </div>
    );
  }
}
