import { h, Component, State } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
})
export class LandingPage {
  @State()
  dark: boolean;

  docStyle = document.documentElement.style;
  darkVariables = {
    '--color-background': 'var(--color-0)',
    '--color-background-offset': 'var(--color-1)',
    '--color-background-offset-2': 'var(--color-00)',
    '--color-text': 'var(--color-10)',
    '--border-color': 'var(--color-00)',
    '--toggle-handle-box-shadow': 'none',
    '--avatar-border-radius': '1em',
    '--field-color': '#f694ff',
    '--table-row-color--clickable': '#e717fa',
    '--timeline-line-color': '#9e9e9e',
    '--divider-color': '#e717fa',
  };

  async setTheme(e) {
    this.dark = e.detail;
    if (!this.dark) return this.resetTheme();
    Object.keys(this.darkVariables).forEach(prop => {
      this.docStyle.setProperty(prop, this.darkVariables[prop]);
    });
  }

  async resetTheme() {
    Object.keys(this.darkVariables).forEach(prop => {
      this.docStyle.removeProperty(prop);
    });
  }

  render() {
    return (
      <section>
        <h1 aria-label="Blaze UI" class="c-heading c-site-header">
          <site-name />
        </h1>

        <p class="o-container o-container--small u-super u-centered">Customise Blaze UI CSS variables</p>

        <div class="u-letter-box-xlarge">
          <p class="c-paragraph u-centered">
            <span class="u-pillar-box-large u-xlarge">
              <blaze-toggle type="brand" style={{ display: 'inline-block ' }} onToggle={e => this.setTheme(e)}>
                <i class="fas fa-adjust" />
              </blaze-toggle>
            </span>
          </p>
        </div>
      </section>
    );
  }
}
