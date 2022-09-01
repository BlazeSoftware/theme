import '@blaze/atoms';
import { h, Component } from '@stencil/core';
import '@stencil/router';
import { allRoutes } from './routes/routes';

@Component({
  tag: 'blaze-site',
})
export class BlazeSite {
  render() {
    return (
      <main class="u-text">
        <site-header />
        <section class="o-container o-container--super u-pillar-box-small">
          <home-page />
        </section>
        {allRoutes.map(area => (
          <section class="o-container o-container--super u-pillar-box-super">
            {area.routes.map(section => (
              <div class="u-letter-box-large">
                <h1 id={section.anchor} class="c-heading u-super">
                  {section.name}
                </h1>
                <div class="o-grid o-grid--wrap o-demo">
                  <div class="u-letter-box-small o-grid__cell o-grid__cell--width-100 o-grid__cell--width-40@large">
                    <div class="o-demo__component" innerHTML={`<${section.component} />`} />
                  </div>
                  <div class="u-letter-box-small o-grid__cell o-grid__cell--width-100 o-grid__cell--width-60@large">
                    <theme-panel variables={section.variables} />
                  </div>
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>
    );
  }
}
