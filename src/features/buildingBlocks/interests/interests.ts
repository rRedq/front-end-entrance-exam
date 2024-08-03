import { div, p, input } from 'shared/lib/dom/tag-function';
import style from './interests.module.scss';
import { showModal } from 'features/showModal';

const data: string[] = [
  'branding',
  'brand identity',
  'logo',
  'typography',
  'photography',
  'designing',
  'poster design',
  'research',
  'social networks',
  'illustration',
];

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
  });
};
