interface BaseTagsProps {
  className?: string;
  textContent?: string;
  style?: { [key: string]: string };
  onclick?: (e: Event) => void;
}

interface InputProps extends BaseTagsProps {
  required?: string;
  type?: string;
  value?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  min?: string;
  max?: string;
}

export { type BaseTagsProps, type InputProps };
