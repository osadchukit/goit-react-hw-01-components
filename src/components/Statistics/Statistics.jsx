import PropTypes from 'prop-types';
import { TextInfo, TextValue } from './Statistics.styled';

export const Statistics = ({ stat: { label, percentage } }) => {
  return (
    <>
      <TextInfo>{label}</TextInfo>
      <TextValue>{percentage}</TextValue>
    </>
  );
};

Statistics.protoTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
