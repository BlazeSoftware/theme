import { h, Component, Prop, Event, EventEmitter, State } from '@stencil/core';
import { VariableType } from './variables';

@Component({
  tag: 'theme-input',
  styleUrl: 'theme-input.scss',
})
export class ThemeInput {
  @Prop()
  type?: VariableType = 'color';

  @Prop()
  value: string;

  @State()
  newValue: string;

  @Event()
  valueChange: EventEmitter<string>;

  handleChange(e) {
    this.newValue = e.target.value;
    this.valueChange.emit(this.newValue);
  }

  render() {
    return (
      <div class="c-color-picker o-field o-field--icon-right u-letter-box-small">
        <input class="c-color-picker__value c-field u-text--mono" value={this.newValue} onInput={e => this.handleChange(e)} spellcheck={false} />
        {this.type === 'color' && [
          <i class="fas fa-palette c-icon" />,
          <input class="c-color-picker__input" type="color" value={this.newValue} onInput={e => this.handleChange(e)} spellcheck={false} />,
        ]}
      </div>
    );
  }
}
