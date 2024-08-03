import { BaseTagsProps, InputProps } from 'shared/types/domTypes';
import { createElement } from './dom-helpers';

const div = (props: BaseTagsProps, children?: HTMLElement[]) => {
  return createElement<BaseTagsProps, HTMLDivElement>('div', props, children);
};

const main = (props: BaseTagsProps, children?: HTMLElement[]) => {
  return createElement<BaseTagsProps, HTMLDivElement>('main', props, children);
};

const section = (props: BaseTagsProps, children?: HTMLElement[]) => {
  return createElement<BaseTagsProps, HTMLElement>('section', props, children);
};

const ul = (props: BaseTagsProps, children?: HTMLElement[]) => {
  return createElement<BaseTagsProps, HTMLUListElement>('ul', props, children);
};

const li = (props: BaseTagsProps, children?: HTMLElement[]) => {
  return createElement<BaseTagsProps, HTMLLIElement>('li', props, children);
};

const p = (props: BaseTagsProps) => {
  return createElement<BaseTagsProps, HTMLParagraphElement>('p', props);
};

const h1 = (props: BaseTagsProps) => {
  return createElement<BaseTagsProps, HTMLHeadingElement>('h1', props);
};

const img = (props: BaseTagsProps & { src: string; alt: string }) => {
  return createElement<BaseTagsProps, HTMLImageElement>('img', props);
};

const input = (props: InputProps) => {
  return createElement<InputProps, HTMLInputElement>('input', props);
};

const button = (props: BaseTagsProps & { disabled?: boolean }) => {
  return createElement<BaseTagsProps, HTMLButtonElement>('button', props);
};

export { div, p, h1, main, section, img, ul, li, input, button };
