import PropTypes from 'prop-types';

// Avatar,
import {
  Container,
  Card,
  Username,
  Tag,
  Location,
  Stats,
  Text,
} from './Event.styled';

// avatar,
export const Event = ({ username, tag, location, followers, views, likes }) => {
  // console.log(location);

  return (
    <Container>
      <Card>
        <Username>{username}</Username>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Card>
      <Stats>
        <Text>{followers}</Text>
        <Text>{views}</Text>
        <Text>{likes}</Text>
      </Stats>
    </Container>
  );
};
/* <Avatar>{avatar}</Avatar> */

// avatar: PropTypes.string.isRequired,
Event.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
