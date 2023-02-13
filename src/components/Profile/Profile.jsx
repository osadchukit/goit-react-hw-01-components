import PropTypes from 'prop-types';
import { Event } from 'components/Event/Event';
// import { Containers } from './Profile.styled';

// export const Profile = events => {
//   console.log(events);
//   return (
//     <Containers>
//       {events.map(({ username, location, tag, followers, views, likes }) => (
//         <Event
//           key={username}
//           username={username}
//           location={location}
//           tag={tag}
//           followers={followers}
//           views={views}
//           likes={likes}
//         />
//       ))}
//     </Containers>
//   );
// };

export const Profile = ({
  username,
  location,
  tag,
  followers,
  views,
  likes,
}) => {
  console.log(username);
  return (
    <Event
      key={username}
      username={username}
      location={location}
      tag={tag}
      followers={followers}
      views={views}
      likes={likes}
    />
  );
};

// avatar: PropTypes.string.isRequired,
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
