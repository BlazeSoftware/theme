import { h, Component } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
})
export class LandingPage {
  render() {
    return (
      <section>
        <h1 aria-label="Blaze UI" class="c-heading c-site-header">
          <site-name />
        </h1>

        <p class="o-container o-container--small u-super u-centered">Customise Blaze UI CSS variables</p>
      </section>
    );
  }
}
