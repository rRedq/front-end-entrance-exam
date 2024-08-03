import { div, input, p } from 'shared/lib/dom/tag-function';
import style from './languages.module.scss';
import { LanguageData } from 'shared/types/dataTypes';
import { showModal } from 'features/showModal';

const createLine = (obj: LanguageData, index: number) => {
  const { language, level } = obj;
  const languageCover = div({ className: style.language, textContent: language });
  const fill = div({ className: style.fill, style: { width: `${level}%` } });

  return div({ className: style.line, onclick: () => updateLanguage(languageCover, fill, index) }, [
    languageCover,
    div({ className: style.level }, [fill]),
  ]);
};

export const languages = () => {
  return div({ className: style.wrapper }, [
    p({ className: 'label', textContent: 'Languages' }),
    div(
      { className: style.container },
      data.map((item, i) => createLine(item, i))
    ),
  ]);
};

const updateLanguage = (language: HTMLElement, fill: HTMLElement, index: number) => {
  const languageInput = input({ value: data[index].language });
  const fillInput = input({
    value: data[index].level,
    type: 'number',
    min: '0',
    max: '100',
  });
  const cover = div({ style: { display: 'flex', flexDirection: 'column', gap: '5px' } }, [
    languageInput,
    fillInput,
  ]);
  showModal(cover, () => {
    const languageValue = languageInput.value;
    const levelValue = Number(fillInput.value) > 100 ? '100' : fillInput.value;
    data.splice(index, 1, { language: languageValue, level: levelValue });
    language.textContent = languageValue;
    fill.style.width = `${levelValue}%`;
  });
};

const data: LanguageData[] = [
  {
    language: 'English',
    level: '100',
  },
  {
    language: 'Spanish',
    level: '80',
  },
  {
    language: 'French',
    level: '70',
  },
];
