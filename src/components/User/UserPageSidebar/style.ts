import styled from '@emotion/styled';

const Menu = styled.ul`
  width: 240px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  background-color: var(--white);
  box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
  border-radius: 12px;
`;

const MenuItem = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;

  &:not(:last-of-type)::after {
    content: '';
    display: block;
    width: calc(100% - 40px);
    height: 1px;
    margin: 8px 20px;
    border-bottom: 1px solid #d7e2ee;
  }
`;

const Text = styled.div<{ isClicked: boolean }>`
  margin: 0 10px;
  padding: 8px 10px;
  border-radius: 8px;
  color: ${({ isClicked }) => (isClicked ? 'var(--font-main-color)' : '#8D91A0')};
  background-color: ${({ isClicked }) => (isClicked ? '#EBEBEB' : 'var(--white)')};
  &:hover {
    background-color: ${({ isClicked }) => (isClicked ? '#EBEBEB' : 'var(--background-color)')};
  }
`;

export { Text, Menu, MenuItem };
