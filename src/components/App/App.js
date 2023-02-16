import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';
import transactions from 'components/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/StatisticsList';
import { FriendList } from 'components/Friends/Friends';
import { TransactionHistory } from 'components/Transactions/Transactions';
import { Box } from './app.styled';

export const App = () => {
  return (
    <Box>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
