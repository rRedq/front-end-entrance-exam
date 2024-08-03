import { div, main } from 'shared/lib/dom/tag-function';
import { downloadPdf } from 'shared/lib/utils';
import { bottomSection } from 'widgets/bottomSection';
import { middleSection } from 'widgets/middleSection';
import { upperSection } from 'widgets/upperSection';
import './styles/global.scss';

export const createApp = () => {
  const btn = div({ textContent: 'button', onclick: () => downloadPdf(app, 'resume') });

  const app = main({ className: 'resume' }, [
    upperSection(),
    middleSection(),
    bottomSection(),
    btn,
  ]);

  return app;
};
