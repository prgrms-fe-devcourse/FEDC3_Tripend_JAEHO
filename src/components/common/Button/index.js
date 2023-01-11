import styled from '@emotion/styled';

export const HeaderButton = styled.button`
  background-color: var(--primary);
  text-align: center;
  font-size: 14px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
    transition: ease-in 0.3s;
  }
`;
