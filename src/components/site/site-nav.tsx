import { h, Component, Method, State } from '@stencil/core';
import { allRoutes } from '../routes/routes';
import { Route } from '../routes/types';

@Component({
  tag: 'site-nav',
  styleUrl: 'site-nav.scss'
})
export class SiteNav {
  drawerRef: any;

  @State()
  isOpen: boolean;

  @Method()
  async show() {
    this.drawerRef.show();
  }

  @Method()
  async close() {
    this.drawerRef.close();
  }

  navSection({ title, description, routes }: { title: string; description: string; routes: Array<Route> }) {
    const navLinks = (routes: Array<Route>) => {
      return routes.map(route => (
        <li class="c-list__item u-letter-box u-letter-box-xsmall">
          <stencil-route-link url={`#${route.anchor}`} onClick={() => this.close()}>
            {route.name}
          </stencil-route-link>
        </li>
      ));
    };

    return (
      <section class="u-letter-box-medium">
        <h3 aria-label={`${title}, ${description}`} class="c-heading u-large">
          {title}
          <div class="c-heading__sub">{description}</div>
        </h3>
        <ul class="c-list c-list--unstyled">{navLinks(routes)}</ul>
      </section>
    );
  }

  render() {
    return (
      <div class="u-text">
        <button aria-label="Open navigation menu" class="c-button c-button--nude o-page-header__button o-page-header__button--left" onClick={() => this.show()}>
          <i class="fas fa-bars fa-lg" />
        </button>
        <blaze-drawer position="left" ref={ref => (this.drawerRef = ref)} dismissible>
          <blaze-card>
            <blaze-card-header>
              <h2 class="c-heading u-xlarge">
                <site-name />
              </h2>
            </blaze-card-header>
            <blaze-card-body>
              <nav aria-label="Navigation panel open">
                <section>
                  <h3 aria-label="Open source, links to the source code" class="c-heading u-large">
                    Open Source
                  </h3>
                  <ul class="c-list c-list--unstyled">
                    <li class="c-list__item u-letter-box u-letter-box-xsmall">
                      <a class="c-link" href="https://github.com/BlazeSoftware/css">
                        <i class="fab fa-css3-alt" /> CSS
                      </a>
                    </li>
                    <li class="c-list__item u-letter-box u-letter-box-xsmall">
                      <a class="c-link" href="https://github.com/BlazeSoftware/atoms">
                        <i class="fas fa-atom" /> Atoms
                      </a>
                    </li>
                  </ul>
                </section>

                {allRoutes.map(area => this.navSection(area))}
              </nav>
            </blaze-card-body>
          </blaze-card>
        </blaze-drawer>
      </div>
    );
  }
}
