import user from '../../date/user.json';
import data from '../../date/data.json';
import friends from '../../date/friends.json';
import transactions from '../../date/transactions.json';

import { Profile } from 'components/Profile/';
import { StatisticsList } from 'components/Statistics';
import { FriendList } from 'components/Friends/';
import { TransactionHistory } from 'components/Transactions/';
import { Box } from './app.styled';

export const App = () => {
  return (
    <Box>
      <Profile user={user} />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
