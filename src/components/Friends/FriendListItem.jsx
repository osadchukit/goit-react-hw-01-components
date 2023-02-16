import PropTypes from 'prop-types';
import { Chec, TextValue } from './Friends.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Chec isOnlines={isOnline}>{isOnline}</Chec>
      <img src={avatar} alt={avatar} width="40px" />
      <TextValue>{name}</TextValue>
    </>
  );
};

FriendListItem.protoType = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
