import PropTypes from 'prop-types';
import {
  BoxInfo,
  BoxProfile,
  Info,
  ProfileX,
  Text,
  TextInfo,
  TextValue,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <BoxProfile key={tag}>
      <ProfileX>
        <img src={avatar} alt={username} width="100px" />
        <h2>{username}</h2>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </ProfileX>
      <BoxInfo>
        <Info>
          <TextInfo>followers</TextInfo>
          <TextValue>{followers}</TextValue>
        </Info>
        <Info>
          <TextInfo>views</TextInfo>
          <TextValue>{views}</TextValue>
        </Info>
        <Info>
          <TextInfo>likes</TextInfo>
          <TextValue>{likes}</TextValue>
        </Info>
      </BoxInfo>
    </BoxProfile>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
