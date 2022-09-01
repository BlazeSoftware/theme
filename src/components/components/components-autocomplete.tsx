import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-autocomplete',
})
export class ComponentsAutocomplete {


  demoSearch(e) {
    var items = [];
    if (e.detail) {
      for (var i = 0; i < 5; i++) {
        var text = e.detail;
        for (var j = 0; j < i; j++) {
          text += e.detail;
        }
        items.push({ id: i, text });
      }
    }
    e.target.setItems(items);
  }

  render() {
    return <blaze-autocomplete placeholder="Enter some text..." onFilter={e => this.demoSearch(e)} />;
  }
}
