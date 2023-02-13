import { Profile } from './Profile/Profile';
import users from '../libraries/user.json';

export const App = () => {
  return <Profile events={users} />;
};
