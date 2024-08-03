import { div, p, input } from 'shared/lib/dom/tag-function';
import style from './interests.module.scss';
import { showModal } from 'features/showModal';
import { initialData } from 'shared/initialData';
import { getLocalState, setLocalState } from 'shared/lib/utils';

const localState = getLocalState('interests');
const data: string[] = localState ? localState : [...initialData.interests];

const itemList = data.map((item, index) =>
  div({
    className: style.contentItem,
    textContent: item,
    onclick: () => updateInterests(index),
  })
);

export const interests = () => {
  return div({ className: style.wrapper }, [
    p({ className: 'label', textContent: 'Interests' }),
    div({ className: style.content }, itemList),
  ]);
};

const updateInterests = (index: number) => {
  const requestInput = input({ value: itemList[index].textContent || '' });
  showModal(requestInput, () => {
    const newValue = requestInput.value;
    data.splice(index, 1, newValue);
    itemList[index].textContent = newValue;
    setLocalState('interests', data);
  });
};
