import { div, p, h1, input } from 'shared/lib/dom/tag-function';
import style from './profileName.module.scss';
import { ProfileNameData } from 'shared/types/dataTypes';
import { showModal } from 'features/showModal';
import { initialData } from 'shared/initialData';
import { getLocalState, setLocalState, setWaveEffect } from 'shared/lib/utils';

const localState = getLocalState('profileName');
let data: ProfileNameData = localState ? localState : { ...initialData.profileName };

export const profileName = () => {
  const { name, position, greeting } = data;

  const profileName = h1({
    textContent: name,
    onclick: (e) => {
      setWaveEffect(profileName, e);
      updateName('name', profileName);
    },
  });
  const profilePosition = p({
    className: style.field,
    textContent: position,
    onclick: (e) => {
      setWaveEffect(profilePosition, e);
      updateName('position', profilePosition);
    },
  });
  const profileGreeting = p({
    className: style.greet,
    textContent: greeting,
    onclick: (e) => {
      setWaveEffect(profileGreeting, e);
      updateName('greeting', profileGreeting);
    },
  });

  return div({ className: style.wrapper }, [
    profileGreeting,
    div({ style: { display: 'flex', flexDirection: 'column', gap: '6px' } }, [
      profileName,
      profilePosition,
    ]),
  ]);
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
