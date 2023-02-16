import styled from '@emotion/styled';

export const BoxInfo = styled.ul`
  margin-top: 20px;
  padding: 0px;
`;

export const Info = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 8px;
  padding: 8px;
  width: 180px;
  background-color: rgb(206, 228, 210);
  border-radius: 5px;
`;

export const Chec = styled.span`
  margin-right: 10px;
  margin-left: 4px;
  height: 15px;
  width: 15px;
  border-radius: 50%;

  /* background-color: ${({ isOnlines }) => {
    switch (isOnlines) {
      case true:
        return '#03fd07';
      case false:
        return '#ff0000';
    }
  }}; */
`;

export const TextValue = styled.span`
  margin-left: 15px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.25px;
`;
