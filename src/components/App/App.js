import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';
import transactions from 'components/transactions.json';
import { Profile } from 'components/Profile/';
import { Statistics } from 'components/Statistics/';
import { FriendList } from 'components/Friends/';
import { TransactionHistory } from 'components/Transactions/';
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
