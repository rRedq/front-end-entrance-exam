import { div, h2, input } from 'shared/lib/dom/tag-function';
import style from './contacts.module.scss';
import { showModal } from 'features/showModal';
import { ContactsData } from 'shared/types/dataTypes';
import { initialData } from 'shared/initialData';
import { getLocalState, setLocalState, setWaveEffect } from 'shared/lib/utils';

const localState = getLocalState('contacts');
let data = localState ? localState : { ...initialData.contacts };

export const contacts = () => {
  const { label, email, phone } = data;

  const contactLabel = h2({
    className: `${style.wave} label`,
    textContent: label,
    onclick: (e) => {
      setWaveEffect(contactLabel, e);
      updateContacts('label', contactLabel);
    },
  });
  const contactEmail = div({
    className: style.wave,
    textContent: email,
    onclick: (e) => {
      setWaveEffect(contactEmail, e);
      updateContacts('email', contactEmail);
    },
  });
  const contactPhone = div({
    className: style.wave,
    textContent: phone,
    onclick: (e) => {
      setWaveEffect(contactPhone, e);
      updateContacts('phone', contactPhone);
    },
  });

  return div({ className: style.wrapper }, [
    contactLabel,
    div({ className: style.container }, [contactEmail, div({ textContent: '|' }), contactPhone]),
  ]);
};

const updateContacts = (key: keyof ContactsData, elem: HTMLElement) => {
  const requestInput = input({ value: elem.textContent || '' });
  showModal(requestInput, () => {
    const newValue = requestInput.value;
    elem.textContent = newValue;
    data = { ...data, [key]: newValue };
    setLocalState('contacts', data);
  });
};
