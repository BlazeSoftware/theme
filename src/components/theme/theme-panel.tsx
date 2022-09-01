import { h, Component, Prop } from '@stencil/core';
import { ThemeInputCustomEvent } from 'components';
import { VariableGroup } from './variables';

@Component({
  tag: 'theme-panel',
  styleUrl: 'theme-panel.scss',
})
export class ThemePanel {
  @Prop()
  variables: VariableGroup[] = [];

  updateCSSVariables(variable: string, e: ThemeInputCustomEvent<string>) {
    document.documentElement.style.setProperty(variable, e.detail);
  }

  renderForm() {
    return this.variables.map(variableGroup => {
      return [
        <blaze-card-header>
          <h3 class="c-heading u-gradient-text">{variableGroup.heading}</h3>
        </blaze-card-header>,
        <blaze-card-body>
          <div class="o-grid o-grid--wrap">
            {variableGroup.variables.map(variable => {
              const currentValue = getComputedStyle(document.documentElement).getPropertyValue(variable.name);

              const label = variable.name
                .replace(/--(\w+)/, '')
                .replace('--', ': ')
                .replaceAll('-', ' ');

              return (
                <div class="o-grid__cell o-grid__cell--width-100 o-grid__cell--width-33@medium">
                  <label class="c-label o-form-element">
                    <span class="u-text--mono">{label}</span>
                    <theme-input value={currentValue} type={variable.type} onValueChange={e => this.updateCSSVariables(variable.name, e)} spellcheck={false} />
                  </label>
                </div>
              );
            })}
          </div>
        </blaze-card-body>,
      ];
    });
  }

  exportVariables() {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.cssText = 'display: none';

    const css = `:root,
:host {
  ${document.querySelector('html').getAttribute('style')}
}`;
    if (!css) return alert('No new styles set');
    const blob = new Blob([css], { type: 'text/css' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'blaze-theme.css';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  render() {
    if (this.variables.length === 0) return;
    return (
      <blaze-card>
        {this.renderForm()}
        <blaze-card-footer>
          <div class="u-right">
            <button class="c-button c-button--ghost c-button--brand u-small" onClick={() => this.exportVariables()}>
              Download CSS <i class="fas fa-download c-icon" />
            </button>
          </div>
        </blaze-card-footer>
      </blaze-card>
    );
  }
}
