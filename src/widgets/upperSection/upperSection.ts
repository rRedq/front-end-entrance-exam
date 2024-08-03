import { section } from 'shared/lib/dom/tag-function';
import style from './upperSection.module.scss';
import { languages, profileImage, profileName } from 'features/buildingBlocks';

const upperSection = () => {
  return section({ className: style.container }, [profileImage(), profileName(), languages()]);
};

export { upperSection };
