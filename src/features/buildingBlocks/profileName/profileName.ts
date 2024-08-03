import { div, p, h1, input } from 'shared/lib/dom/tag-function';
import style from './profileName.module.scss';
import { ProfileNameData } from 'shared/types/dataTypes';
import { showModal } from 'features/showModal';
import { initialData } from 'shared/initialData';
import { getLocalState, setLocalState } from 'shared/lib/utils';

const localState = getLocalState('profileName');
let data: ProfileNameData = localState ? localState : { ...initialData.profileName };

export const profileName = () => {
  const { name, position, greeting } = data;

  const profileName = h1({ textContent: name, onclick: () => updateName('name', profileName) });
  const profilePosition = p({
    className: style.field,
    textContent: position,
    onclick: () => updateName('position', profilePosition),
  });
  const profileGreeting = p({
    textContent: greeting,
    onclick: () => updateName('greeting', profileGreeting),
  });

  return div({ className: style.wrapper }, [profileGreeting, profileName, profilePosition]);
};

const updateName = (key: keyof ProfileNameData, elem: HTMLElement) => {
  const requestInput = input({ value: data[key] });
  showModal(requestInput, () => {
    const newValue = requestInput.value;
    elem.textContent = newValue;
    data = { ...data, [key]: newValue };
    setLocalState('profileName', data);
  });
};
