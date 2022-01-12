import { NAME_SPACE } from './constants';

export const getLinkClassName = ({ isActive }: { isActive: boolean }): string =>
  `${NAME_SPACE}__link ${isActive ? `${NAME_SPACE}__link--active` : ''}`;
