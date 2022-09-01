import { h, Component } from '@stencil/core';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss',
})
export class SiteHeader {
  render() {
    return (
      <header class="o-page-header o-container o-container--large">
        {/* <site-nav /> */}
        <div class="u-centered u-letter-box-small">
          <a aria-label="Blaze Home Page" href="/">
            <i aria-hidden class="o-page-logo fas fa-fire fa-4x" />
          </a>
        </div>
      </header>
    );
  }
}
