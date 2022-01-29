import { useLocalization } from 'hooks';

import { NAME_SPACE } from '../constants';

const DataListItemHeader = () => {
  const STR = useLocalization();

  return (
    <li className={`${NAME_SPACE} ${NAME_SPACE}--header`}>
      <div className={`${NAME_SPACE}__data`}>
        <span className={`${NAME_SPACE}__date`}>{STR.DATE}</span>
        <span className={`${NAME_SPACE}__account`}>{STR.ACCOUNT}</span>
        <span className={`${NAME_SPACE}__category`}>{STR.CATEGORY}</span>
        <span className={`${NAME_SPACE}__amount`}>{STR.AMOUNT}</span>
        <span className={`${NAME_SPACE}__note`}>{STR.NOTE}</span>
      </div>
      <div className={`${NAME_SPACE}__controls`} />
    </li>
  );
};

export { DataListItemHeader };
