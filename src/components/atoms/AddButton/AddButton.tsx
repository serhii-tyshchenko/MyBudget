import { UIIconButton } from 'components/atoms';

type TProps = {
  title?: string;
  onClick: Function;
  className?: string;
};

const AddButton = ({ title = 'Add', onClick, className = '' }: TProps) => (
  <UIIconButton
    icon="plus"
    size="big"
    onClick={onClick}
    title={title}
    className={className}
  />
);

export { AddButton };
