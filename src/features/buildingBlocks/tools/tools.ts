import style from './tools.module.scss';
import logoAnalytics from 'shared/assets/logo/logoanalytics.png';
import logoCreativeCloud from 'shared/assets/logo/logoCreativeCloud.png';
import logoFigma from 'shared/assets/logo/logoFigma.png';
import logoMeet from 'shared/assets/logo/logoMeet.png';
import logoMiro from 'shared/assets/logo/logoMiro.png';
import logoNotion from 'shared/assets/logo/logoNotion.png';
import logoZapìer from 'shared/assets/logo/logoZapìer.png';
import logoWebflow from 'shared/assets/logo/logoWebflow.png';
import logoFramer from 'shared/assets/logo/logoFramer.png';
import logoWordpress from 'shared/assets/logo/logoWordpress.png';
import logoChatGPT from 'shared/assets/logo/logoChatGPT.png';
import logoCopilot from 'shared/assets/logo/logoCopilot.png';
import logoMidjourney from 'shared/assets/logo/logoMidjourney.png';
import { div, h2, img } from 'shared/lib/dom/tag-function';

const createCover = (arr: string[], key: string) => {
  return div({ className: style.cover }, [
    div({ className: style.coverLabel, textContent: key }),
    ...arr.map((icon: string) => img({ src: icon, alt: icon })),
  ]);
};

export const tools = () => {
  const keys = Object.keys(data);
  const values = Object.values(data);
  return div({ className: style.wrapper }, [
    h2({ className: 'label', textContent: 'Tools' }),
    div(
      { className: style.container },
      values.map((item, i) => createCover(item, keys[i]))
    ),
  ]);
};

interface ToolsData {
  [key: string]: string[];
}

const data: ToolsData = {
  design: [logoFigma, logoCreativeCloud, logoMiro, logoNotion, logoMeet, logoAnalytics],
  'no-code': [logoZapìer, logoWebflow, logoFramer, logoWordpress],
  'artificial intelligence': [logoChatGPT, logoCopilot, logoMidjourney],
};
