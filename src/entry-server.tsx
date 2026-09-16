import { renderToString } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import { Site } from './App';

export function render(url: string) {
  const context: { helmet?: HelmetServerState | null } = {};
  const html = renderToString(
    <HelmetProvider context={context}>
      <StaticRouter location={url}><Site /></StaticRouter>
    </HelmetProvider>,
  );
  const { helmet } = context;
  if (!helmet) throw new Error('Page metadata was not rendered for ' + url);
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((element) => element.toString()).join('\n');
  return { html, head };
}
