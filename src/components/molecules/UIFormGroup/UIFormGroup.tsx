import { getClassName } from 'utils';

import './UIFormGroup.scss';

type TUIFormGroupProps = {
  className?: string;
  children: React.ReactNode;
};

const NAME_SPACE = 'ui-form-group';

const UIFormGroup = ({ className = '', children }: TUIFormGroupProps) => {
  const componentClassName = getClassName(NAME_SPACE, className);

  return <div className={componentClassName}>{children}</div>;
};

export { UIFormGroup };
