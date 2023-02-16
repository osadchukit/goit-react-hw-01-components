import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { BoxInfo, Info } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <BoxInfo>
      {friends.map(friend => (
        <Info key={friend.id}>
          <FriendListItem friend={friend} />
        </Info>
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
