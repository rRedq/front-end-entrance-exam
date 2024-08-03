import { div, p, ul, li, input } from 'shared/lib/dom/tag-function';
import style from './experience.module.scss';
import { ExperienceData } from 'shared/types/dataTypes';
import { showModal } from 'features/showModal';

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

  return div({ className: style.container, style: { width: '124px' } }, [
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
    textContent: period,
    onclick: () => updateExperience('period', i, experiencePeriod),
  });
  return div({ className: !i ? `${style.cover} ${style.firstItem}` : style.cover }, [
    div(
      { className: `${style.title} ${style.firstCase}` },
      !i
        ? [experiencePeriod, div({ className: style.firstLabel, textContent: 'most recent' })]
        : [experiencePeriod]
    ),
    div({ style: { display: 'flex', gap: '25px', justifyContent: 'start' } }, [
      createLeftSide(position, time, i),
      createRightSide(list, i),
    ]),
  ]);
};

export const experience = () => {
  return div({ className: style.wrapper }, [
    p({ className: 'label', textContent: 'Experience' }),
    div(
      { className: style.container, style: { gap: '10px' } },
      data.map((item, i) => createLine(item, i))
    ),
  ]);
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
    if (key === 'list') {
      data[dataIndex][key].splice(listIndex, 1, newValue);
    } else {
      data.splice(dataIndex, 1, { ...data[dataIndex], [key]: newValue });
    }
  });
};

const data: ExperienceData[] = [
  {
    period: 'Jul. 2023 - Ago. 2023',
    position: 'Senior Graphic Designer',
    time: 'Pinnacle | Full-time',
    list: [
      'Research and brainstorm various design ideas for content and marketing.',
      'Review the work submitted by Junior Designers and sharing feedback.',
    ],
  },
  {
    period: 'Ene. 2021 - Jul. 2023',
    position: 'Graphic / Web designer',
    time: 'Double Square | Full-time',
    list: [
      'Development of internal projects from scratch, product design of brands..',
      'Landing page, webapps and hybrid apps.',
      'Taking decisions with stakeholders for the future of products such as Beagle labs, myur...',
    ],
  },
  {
    period: 'Feb. 2021 - Jul. 2023',
    position: 'Graphic Designer',
    time: 'Freelance',
    list: [
      'Visual design for Events, Brands and Products.',
      'Product design, Packaging Design.',
      'Logo Design.',
    ],
  },
];
