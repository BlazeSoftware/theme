import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-tables',
})
export class ComponentTables {
  render() {
    return (
      <div>
        <table class="c-table c-table--clickable">
          <caption class="c-table__caption">Clickable table</caption>
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">First name</th>
              <th class="c-table__cell">Last name</th>
              <th class="c-table__cell">Username</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row c-table__row--disabled">
              <td class="c-table__cell">Jim</td>
              <td class="c-table__cell">Kirk</td>
              <td class="c-table__cell">@captaink</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Mr.</td>
              <td class="c-table__cell">Spock</td>
              <td class="c-table__cell">@science101</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Nyota</td>
              <td class="c-table__cell">Uhura</td>
              <td class="c-table__cell">@comms</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table class="c-table c-table--striped">
          <caption class="c-table__caption">Striped table</caption>
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">First name</th>
              <th class="c-table__cell">Last name</th>
              <th class="c-table__cell">Username</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row c-table__row--disabled">
              <td class="c-table__cell">Jim</td>
              <td class="c-table__cell">Kirk</td>
              <td class="c-table__cell">@captaink</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Mr.</td>
              <td class="c-table__cell">Spock</td>
              <td class="c-table__cell">@science101</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">Nyota</td>
              <td class="c-table__cell">Uhura</td>
              <td class="c-table__cell">@comms</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
