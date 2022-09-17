import { h, Component } from '@stencil/core';

enum THEMES {
  DARK = 't-dark',
}
@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
})
export class LandingPage {
  async setTheme(theme: string) {
    this.removeThemes();
    document.documentElement.classList.add(theme);
  }

  async removeThemes() {
    document.documentElement.classList.remove(THEMES.DARK);
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
              <button class="c-button c-button--ghost" onClick={() => this.removeThemes()}>
                Light
              </button>
            </span>
            <span class="u-pillar-box-xlarge">
              <button class="c-button" onClick={() => this.setTheme(THEMES.DARK)}>
                Dark
              </button>
            </span>
          </p>
        </div>
      </section>
    );
  }
}
