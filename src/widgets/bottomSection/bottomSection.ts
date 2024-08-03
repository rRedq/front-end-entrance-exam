import { section } from 'shared/lib/dom/tag-function';
import style from './bottomSection.module.scss';
import { experience, tools } from 'features/buildingBlocks';

export const bottomSection = () => {
  return section({ className: style.container }, [tools(), experience()]);
};
