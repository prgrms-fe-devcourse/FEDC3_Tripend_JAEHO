import styled from '@emotion/styled';

const FormSettingText = styled.h3`
  font-size: 0.4rem;
`;

const PasswordBlock = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 2px;
  outline: none;
  font-size: 1rem;

  &:focus {
    color: #495057;
    border-color: black;
  }
`;

const PasswordText = styled.span`
  color: red;
  margin-top: 100px;
`;

export { FormSettingText, PasswordBlock, Input, PasswordText };
