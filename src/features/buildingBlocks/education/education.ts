import { div, img, p, input } from 'shared/lib/dom/tag-function';
import style from './education.module.scss';
import heart from 'shared/assets/images/heart.svg';
import { showModal } from 'features/showModal';
import { EducationItem } from 'shared/types/dataTypes';
import { initialData } from 'shared/initialData';
import { getLocalState, setLocalState } from 'shared/lib/utils';

const localState = getLocalState('education');
const data = localState ? localState : [...initialData.education];

const createCase = (obj: EducationItem, i: number) => {
  const keys = Object.keys(obj) as (keyof EducationItem)[];
  const values: string[] = Object.values(obj);

  const fields = values.map((value, index) => {
    if (keys[index] === 'tags' && Array.isArray(value)) {
      return div(
        {
          className: style.secondaryTitle,
          style: { display: 'flex', flexWrap: 'wrap', gap: '3px' },
        },
        value.map((item, valueIndex) => {
          const elem = div({
            textContent: `#${item}`,
            onclick: () => updateEducation(keys[index], i, elem, valueIndex),
          });
          return elem;
        })
      );
    } else if (keys[index] === 'year' && !i && !index) {
      const elem = div({
        className: style.primaryTitle,
        textContent: value,
        onclick: () => updateEducation(keys[index], i, elem),
      });
      return div({ className: style.firstContainer }, [elem, img({ src: heart, alt: heart })]);
    } else {
      const elem = div({
        className: `${index === values.length - 1 ? style.secondaryTitle : style.primaryTitle}`,
        textContent: value,
        onclick: () => updateEducation(keys[index], i, elem),
      });
      return elem;
    }
  });

  return div({ className: !i ? `${style.case} ${style.firstCase}` : style.case }, fields);
};

const fields = data.map((item, index) => createCase(item, index));

export const education = () => {
  return div({ className: style.wrapper }, [
    p({ className: 'label', textContent: 'Education' }),
    div({ className: style.container }, fields),
  ]);
};

const updateEducation = (
  key: keyof EducationItem,
  caseIndex: number,
  elem: HTMLElement,
  itemIndex = 0
) => {
  const requestInput = input({ value: elem.textContent || '' });
  showModal(requestInput, () => {
    const newValue = requestInput.value;
    elem.textContent = newValue;
    if (key === 'tags') data[caseIndex][key].splice(itemIndex, 1, newValue.replace('#', ''));
    else data[caseIndex][key] = newValue;
    setLocalState('education', data);
  });
};
