import PropTypes from 'prop-types';
import { Statistics } from './Statistics';
import { BoxInfo, BoxStatistics, Info } from './Statistics.styled';

export const StatisticsList = ({ title, stats }) => {
  return (
    <BoxStatistics>
      <h2>{title}</h2>
      <BoxInfo>
        {stats.map(stat => (
          <Info key={stat.id}>
            <Statistics stat={stat} />
          </Info>
        ))}
      </BoxInfo>
    </BoxStatistics>
  );
};

StatisticsList.protoType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
