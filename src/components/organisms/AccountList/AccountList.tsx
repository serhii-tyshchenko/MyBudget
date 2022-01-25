import { useSelector } from 'react-redux';

import { TRootState } from 'store';

import { AccountListItem } from 'components/molecules';
import { isEmpty } from 'utils';

import { TAccount } from 'types';

import './AccountList.scss';

const NAME_SPACE = 'account-list';

type TProps = {
  data: Array<TAccount>;
  onDelete: Function;
  onEdit: Function;
};

const AccountList = ({ data, onDelete, onEdit }: TProps) => {
  const { accounts, expenses, incomes } = useSelector(
    (state: TRootState) => state
  );

  const getAccountBalance = (id: string): number => {
    const initialBalance = Number(
      accounts.find((item) => item.id === id).initialBalance
    );
    const accountExpenses = expenses
      .filter((expense) => expense.account === id)
      .reduce((acc, item) => acc + +item.amount, 0);
    const accountIncomes = incomes
      .filter((income) => income.account === id)
      .reduce((acc, item) => acc + +item.amount, 0);
    return initialBalance + accountIncomes - accountExpenses;
  };

  return !isEmpty(data) ? (
    <ul className={NAME_SPACE}>
      {data.map((account: TAccount) => (
        <AccountListItem
          data={account}
          balance={getAccountBalance(account.id)}
          onDeleteClick={onDelete}
          onEditClick={onEdit}
          key={account.id}
        />
      ))}
    </ul>
  ) : (
    <p>No data to show. Click '+' to add account.</p>
  );
};

export { AccountList };
