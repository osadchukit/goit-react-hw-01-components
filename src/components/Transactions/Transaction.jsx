import PropTypes from 'prop-types';
import { HeaderItem, TableRow, Td, Tr } from './Transactions.styled';

export const Transaction = ({ item: { type, amount, currency } }) => {
  return (
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
};

Transaction.protoType = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
