import { div, img, input, h2 } from 'shared/lib/dom/tag-function';
import style from './education.module.scss';
import heart from 'shared/assets/images/heart.svg';
import { showModal } from 'features/showModal';
import { EducationItem } from 'shared/types/dataTypes';
import { initialData } from 'shared/initialData';
import { getLocalState, setLocalState, setWaveEffect } from 'shared/lib/utils';

const localState = getLocalState('education');
const data: EducationItem[] = localState ? localState : [...initialData.education];

const createYear = (i: number) => {
  const value = data[i].year;
  if (!i) {
    const elem = div({
      className: style.primaryTitle,
      textContent: value,
      onclick: () => updateEducation('year', i, elem),
    });
    return div({ className: style.firstContainer }, [elem, img({ src: heart, alt: heart })]);
  } else {
    const elem = div({
      className: style.primaryTitle,
      textContent: value,
      onclick: () => updateEducation('year', i, elem),
    });
    return elem;
  }
};

const createContent = (i: number) => {
  const tags = div(
    {
      className: style.secondaryTitle,
      style: { display: 'flex', flexWrap: 'wrap', columnGap: '3px' },
    },
    data[i].tags.map((item, valueIndex) => {
      const elem = div({
        className: style.tags,
        textContent: `#${item}`,
        onclick: () => updateEducation('tags', i, elem, valueIndex),
      });
      return elem;
    })
  );
  const title = div({
    className: style.primaryTitle,
    textContent: data[i].title,
    onclick: () => updateEducation('title', i, title),
  });

  return div({}, [title, tags]);
};

const createSource = (i: number) => {
  const elem = div({
    className: style.secondaryTitle,
    textContent: data[i].source,
    onclick: () => updateEducation('source', i, elem),
  });
  return elem;
};

const fields = data.map((_, i) => {
  const cover = div({ className: style.case, onclick: (e) => setWaveEffect(cover, e) }, [
    createYear(i),
    createContent(i),
    createSource(i),
  ]);
  return cover;
});

export const education = () => {
  return div({ className: style.wrapper }, [
    h2({ className: 'label', textContent: 'Education' }),
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
