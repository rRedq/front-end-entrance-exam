import { BaseTagsProps } from 'shared/types/domTypes';

const appendChildren = (parent: HTMLElement, children: HTMLElement[]): void => {
  children.forEach((child) => parent.append(child));
};

const createElement = <
  U extends BaseTagsProps,
  T extends HTMLElement = HTMLElement,
  K extends HTMLElement = HTMLElement,
>(
  tag: keyof HTMLElementTagNameMap,
  props: U,
  children?: K[]
): T => {
  const elem: T = document.createElement(tag) as T;
  const { style, ...restProps } = props;
  Object.assign(elem, restProps);
  if (style) Object.assign(elem.style, style);
  if (children) appendChildren(elem, children);

  return elem;
};

export { createElement, appendChildren };
