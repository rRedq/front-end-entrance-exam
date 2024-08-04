import { div, img, main } from 'shared/lib/dom/tag-function';
import { downloadPdf } from 'shared/lib/utils';
import { bottomSection } from 'widgets/bottomSection';
import { middleSection } from 'widgets/middleSection';
import { upperSection } from 'widgets/upperSection';
import style from './styles/app.module.scss';
import icon from 'shared/assets/images/download.svg';
import './styles/global.scss';

export const createApp = () => {
  const btn = div(
    {
      className: style.saveBtn,
      onclick: () => downloadPdf(app, 'cv'),
    },
    [img({ src: icon, alt: icon })]
  );

  const app = main({ className: style.cv }, [upperSection(), middleSection(), bottomSection()]);

  const cover = div({ className: style.cover }, [btn, app]);

  return cover;
};
