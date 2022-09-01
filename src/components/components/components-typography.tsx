import { h, Component } from '@stencil/core';

@Component({
  tag: 'components-typography',
})
export class ComponentsTypography {
  render() {
    return (
      <div>
        <section class="u-letter-box-large">
          <h3 class="c-heading u-xlarge">Hyper-links</h3>

          <a href="#" class="u-large c-link">
            .c-link
          </a>
          <br />
          <a href="#" class="u-large c-link c-link--brand">
            brand
          </a>
          <br />
          <a href="#" class="u-large c-link c-link--info">
            info
          </a>
          <br />
          <a href="#" class="u-large c-link c-link--warning">
            warning
          </a>
          <br />
          <a href="#" class="u-large c-link c-link--success">
            success
          </a>
          <br />
          <a href="#" class="u-large c-link c-link--error">
            error
          </a>
        </section>

        <section class="u-letter-box-large">
          <h3 class="c-heading u-xlarge">Gradient text</h3>

          <div class="u-super u-gradient-text">Default gradient</div>
          <br />
          <div class="u-super u-gradient-text u-gradient-text--info">Information</div>
          <br />
          <div class="u-super u-gradient-text u-gradient-text--warning">Warning</div>
          <br />
          <div class="u-super u-gradient-text u-gradient-text--success">Success</div>
          <br />
          <div class="u-super u-gradient-text u-gradient-text--error">Error</div>
        </section>

        <section class="u-letter-box-large">
          <h3 class="c-heading u-xlarge">Highlighting text</h3>

          <span class="u-xlarge u-text--highlight">To highlight text simply wrap the words with the highlight class</span>
        </section>

        <section class="u-letter-box-large">
          <h3 class="c-heading u-xlarge">Code</h3>
          <code class="u-code u-code--multiline">
            {`<html>
  <body>
    <main>
      <header>
        <h1>hello world</h1>
      </header>
    </main>
  </body>
</html>`}
          </code>
        </section>

        <section class="u-letter-box-large">
          <h3 class="c-heading u-xlarge">Blockquote</h3>

          <blockquote class="u-blockquote">
            <div class="u-blockquote__body">"Never tell the same lie twice."</div>
            <footer class="u-blockquote__footer">- Garak</footer>
          </blockquote>
          <blockquote class="u-blockquote u-blockquote--info">
            <div class="u-blockquote__body">"Logic is the beginning of wisdom, not the end."</div>
            <footer class="u-blockquote__footer">- Spock</footer>
          </blockquote>
          <blockquote class="u-blockquote u-blockquote--warning">
            <div class="u-blockquote__body">"I'm no angel, but I try to live every day as the best human being I know how to be."</div>
            <footer class="u-blockquote__footer">- Miles O'Brien</footer>
          </blockquote>
          <blockquote class="u-blockquote u-blockquote--success">
            <div class="u-blockquote__body">"I don't believe in the no-win scenario."</div>
            <footer class="u-blockquote__footer">- James T. Kirk</footer>
          </blockquote>
          <blockquote class="u-blockquote u-blockquote--error">
            <div class="u-blockquote__body">"Things are only impossible until they are not."</div>
            <footer class="u-blockquote__footer">- Jean-Luc Picard</footer>
          </blockquote>
        </section>
      </div>
    );
  }
}
