import styled from '@emotion/styled';

const SideBlcok = styled.div``;

const Side = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  color: #cccbc7;
  cursor: pointer;
  position: fixed;
  left: 10%;
  top: 30%;
  bottom: 0;
  width: 200px;
  height: 20%;
  z-index: 10;
  border-radius: 20px;
  padding: 10px;
`;

const Menu = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export { SideBlcok, Side, Menu };
