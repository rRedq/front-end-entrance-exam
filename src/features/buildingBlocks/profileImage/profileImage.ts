import { div } from 'shared/lib/dom/tag-function';
import style from './profileImage.module.scss';

const profileImage = () => {
  return div({ className: style.wrapper });
};

export { profileImage };
