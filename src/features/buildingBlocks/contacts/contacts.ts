import { div, input, p } from 'shared/lib/dom/tag-function';
import style from './contacts.module.scss';
import { showModal } from 'features/showModal';
import { ContactsData } from 'shared/types/dataTypes';
import { initialData } from 'shared/initialData';
import { getLocalState, setLocalState } from 'shared/lib/utils';

const localState = getLocalState('contacts');
let data = localState ? localState : { ...initialData.contacts };

export const contacts = () => {
  const { label, email, phone } = data;

  const contactLabel = p({
    className: 'label',
    textContent: label,
    onclick: () => updateContacts('label', contactLabel),
  });
  const contactEmail = div({
    textContent: email,
    onclick: () => updateContacts('email', contactEmail),
  });
  const contactPhone = div({
    textContent: phone,
    onclick: () => updateContacts('phone', contactPhone),
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
