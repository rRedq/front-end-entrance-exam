import { div, h2, input } from 'shared/lib/dom/tag-function';
import style from './languages.module.scss';
import { LanguageData } from 'shared/types/dataTypes';
import { showModal } from 'features/showModal';
import { initialData } from 'shared/initialData';
import { getLocalState, setLocalState, setWaveEffect } from 'shared/lib/utils';

const localState = getLocalState('languages');
const data: LanguageData[] = localState ? localState : [...initialData.languages];

const createLine = (obj: LanguageData, index: number) => {
  const { language, level } = obj;
  const languageCover = div({ className: style.language, textContent: language });
  const fill = div({ className: style.fill, style: { width: `${level}%` } });

  const line = div(
    {
      className: style.line,
      onclick: (e) => {
        setWaveEffect(line, e);
        updateLanguage(languageCover, fill, index);
      },
    },
    [languageCover, div({ className: style.level }, [fill])]
  );
  return line;
};

export const languages = () => {
  return div({ className: style.wrapper }, [
    h2({ className: 'label', textContent: 'Languages' }),
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
    setLocalState('languages', data);
  });
};
