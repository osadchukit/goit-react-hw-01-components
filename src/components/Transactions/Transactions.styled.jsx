import styled from '@emotion/styled';

export const Table = styled.table`
  border: 2px solid black;
  margin: 20px;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  border: 2px solid black;
`;

export const Tr = styled.tr`
  :nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

export const Th = styled.th`
  border: 1px solid black;
  text-transform: uppercase;
  width: 200px;
  padding: 5px 0px 5px 0px;
`;

export const Tbody = styled.tbody`
  border: 1px solid black;
`;

export const Td = styled.td`
  border: 1px solid black;
  padding: 5px 0px 5px 0px;
`;
