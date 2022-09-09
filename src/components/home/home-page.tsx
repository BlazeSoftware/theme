import { h, Component } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
})
export class LandingPage {
  docStyle = document.documentElement.style;
  darkVariables = {
    '--color-background': '#002b36',
    '--color-background-offset': '#143f4d',
    '--color-text': '#ffffff',
    '--color-background-offset-2': '#1b5264',
    '--color-brand': '#03c7d3',
    '--color-success': '#40d46c',
    '--color-info': '#69bdf2',
    '--color-warning': '#eae43e',
    '--color-error': '#d44040',
    '--color-text-brand': '#000000',
    '--color-text-success': '#000000',
    '--color-text-info': '#000000',
    '--border-color': '#3fc7d3',
    '--alert-background': '#000000',
    '--alert-color': '#ffffff',
    '--alert-close-color': '#ffffff',
    '--avatar-border-radius': '0',
    '--button-background': '#ccdade',
    '--badge-background': '#ccdade',
    '--button-color--ghost': '#ccdade',
    '--pagination-color': '#3fc7d3',
    '--pagination-border-radius': '0',
    '--progress-bar-background': '#ccdade',
    '--range-track-border-radius': '0',
    '--range-track-color': '#ccdade',
    '--table-row-background--clickable': '#1b5264',
    '--table-row-color--clickable': '#3fc7d3',
    '--timeline-item-color': '#ccdade',
    '--timeline-line-color': '#1b5264',
    '--timeline-spacing-color': '#1b5264',
    '--toggle-handle-box-shadow': ' none',
    '--tooltip-background': '#000000',
    '--tooltip-color': '#3fc7d3',
    '--tree-item-color': '#3fc7d3',
    '--tree-item-expanded-color': '#3fc7d3',
    '--link-color': '#3fc7d3',
  };

  async setTheme() {
    this.resetTheme();
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

        <div class="u-letter-box-xlarge u-centered">
          <p class="c-paragraph">Try a theme</p>
          <p class="c-paragraph">
            <span class="u-pillar-box-xlarge">
              <button class="c-button c-button--ghost" onClick={() => this.resetTheme()}>
                Light
              </button>
            </span>
            <span class="u-pillar-box-xlarge">
              <button class="c-button" onClick={() => this.setTheme()}>
                Dark
              </button>
            </span>
          </p>
        </div>
      </section>
    );
  }
}
