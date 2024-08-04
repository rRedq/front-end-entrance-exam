import { div, p, ul, li, input, h2 } from 'shared/lib/dom/tag-function';
import style from './experience.module.scss';
import { ExperienceData } from 'shared/types/dataTypes';
import { showModal } from 'features/showModal';
import { initialData } from 'shared/initialData';
import { getLocalState, setLocalState, setWaveEffect } from 'shared/lib/utils';

const localState = getLocalState('experience');
const data = localState ? localState : [...initialData.experience];

const createLeftSide = (position: string, time: string, i: number) => {
  const experiencedPosition = p({
    className: style.position,
    textContent: position,
    onclick: () => updateExperience('position', i, experiencedPosition),
  });
  const experiencedTime = p({
    className: style.title,
    textContent: time,
    onclick: () => updateExperience('time', i, experiencedTime),
  });

  return div({ className: style.container, style: { width: '124px', overflow: 'hidden' } }, [
    experiencedPosition,
    experiencedTime,
  ]);
};

const createRightSide = (list: string[], i: number) => {
  return ul(
    { style: { width: '230px' } },
    list.map((item, index) => {
      const elem = li({
        className: style.title,
        textContent: item,
        onclick: () => updateExperience('list', i, elem, index),
      });
      return elem;
    })
  );
};

const createLine = (param: ExperienceData, i: number) => {
  const { period, position, time, list } = param;

  const experiencePeriod = div({
    className: style.time,
    textContent: period,
    onclick: () => updateExperience('period', i, experiencePeriod),
  });
  const experienceLine = div(
    { className: style.cover, onclick: (e) => setWaveEffect(experienceLine, e) },
    [
      div(
        { className: style.firstCase },
        !i
          ? [experiencePeriod, div({ className: style.firstLabel, textContent: 'most recent' })]
          : [experiencePeriod]
      ),
      div({ style: { display: 'flex', gap: '22px', justifyContent: 'start' } }, [
        createLeftSide(position, time, i),
        createRightSide(list, i),
      ]),
    ]
  );

  return experienceLine;
};

export const experience = () => {
  const wrapper = div({ className: style.wrapper }, [
    h2({ className: 'label', textContent: 'Experience' }),
    div(
      { className: style.container, style: { gap: '10px' } },
      data.map((item, i) => createLine(item, i))
    ),
  ]);
  return wrapper;
};

const updateExperience = (
  key: keyof ExperienceData,
  dataIndex: number,
  elem: HTMLElement,
  listIndex = 0
) => {
  const requestInput = input({ value: elem.textContent || '' });
  showModal(requestInput, () => {
    const newValue = requestInput.value;
    elem.textContent = newValue;
    if (key === 'list') data[dataIndex][key].splice(listIndex, 1, newValue);
    else data.splice(dataIndex, 1, { ...data[dataIndex], [key]: newValue });
    setLocalState('experience', data);
  });
};
