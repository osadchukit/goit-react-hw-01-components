import PropTypes from 'prop-types';
import { Statistic } from './Statistics';
import { BoxInfo, BoxStatistics, Info } from './Statistics.styled';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <BoxStatistics>
      <h2>{title}</h2>
      <BoxInfo>
        {stats.map(stat => (
          <Info key={stat.id}>
            <Statistic stat={stat} />
          </Info>
        ))}
      </BoxInfo>
    </BoxStatistics>
  );
};

Statistics.protoType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
