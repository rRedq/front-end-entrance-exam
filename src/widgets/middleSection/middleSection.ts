import { div, section } from 'shared/lib/dom/tag-function';
import style from './middleSection.module.scss';
import { contacts, education, interests } from 'features/buildingBlocks';

export const middleSection = () => {
  return section({ className: style.container }, [
    education(),
    div({ className: style.rightBlock }, [interests(), contacts()]),
  ]);
};
