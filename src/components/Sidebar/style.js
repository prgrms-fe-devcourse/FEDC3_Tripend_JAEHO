import styled from '@emotion/styled';

const SideBlcok = styled.div``;

const Side = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  min-height: 27px;
  color: #cccbc7;
  cursor: pointer;
  padding-left: 10px;
  position: fixed;
  left: 10%;
  top: 30%;
  bottom: 0;
  width: 200px;
  height: 50%;
  border-right: 1px solid #dee2e6;
  z-index: 10;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export { SideBlcok, Side, Menu };
