import { getClassName } from 'utils';

import './UIFormGroup.scss';

type TUIFormGroupProps = {
  className?: string;
  vertical?: boolean;
  children: React.ReactNode;
};

const NAME_SPACE = 'ui-form-group';

const UIFormGroup = ({
  className = '',
  vertical = false,
  children,
}: TUIFormGroupProps) => {
  const componentClassName = getClassName(NAME_SPACE, className, {
    [`${NAME_SPACE}--vertical`]: vertical,
  });

  return <div className={componentClassName}>{children}</div>;
};

export { UIFormGroup };
