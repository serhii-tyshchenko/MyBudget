import { getClassName } from 'utils';

import { NAME_SPACE } from './constants';

import './UITextarea.scss';

type TProps = {
  name?: string;
  value: string;
  onChange: (e: { target: { name: any; value: any } }) => void;
  onBlur?: () => {};
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  size?: number;
};

const UITextarea = ({
  name = NAME_SPACE,
  value,
  onChange,
  onBlur,
  className,
  placeholder,
  required = false,
  disabled = false,
}: TProps) => {
  const componentClassName = getClassName(NAME_SPACE, className);

  return (
    <textarea
      name={name}
      value={value}
      className={componentClassName}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

export { UITextarea };
