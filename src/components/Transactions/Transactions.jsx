import PropTypes from 'prop-types';
import { Transaction } from './Transaction';

import { Table, Tbody, Th, Thead, Tr } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {items.map(item => (
          <Transaction item={item} key={item.id} />
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
