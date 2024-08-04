import { span } from 'shared/lib/dom/tag-function';
import style from './waveEffect.module.scss';
import { activeModal } from 'features/showModal';

let wave: HTMLElement;
let interval: NodeJS.Timeout;

document.addEventListener('animationend', () => wave.remove());

export const setWaveEffect = (elem: HTMLElement, e: MouseEvent) => {
  wave = span({ className: style.wave });

  const element = elem.getBoundingClientRect();
  const size = Math.max(element.width, element.height);
  wave.style.width = wave.style.height = `${size}px`;
  const x = e.clientX - element.left - size / 2;
  const y = e.clientY - element.top - size / 2;
  wave.style.left = `${x}px`;
  wave.style.top = `${y}px`;
  elem.append(wave);

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    if (!document.querySelector(`.${activeModal}`)) clearInterval(interval);
    else elem.append(wave);
  }, 2000);
};
