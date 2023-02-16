import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { BoxInfo } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <BoxInfo>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </BoxInfo>
  );
};

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
