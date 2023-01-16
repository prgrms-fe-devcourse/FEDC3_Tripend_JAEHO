import styled from '@emotion/styled';

export const SignupContainer = styled.div`
  margin: 0 auto;
  width: 460px;
  position: relative;
  top: 200px;
`;

export const SignupTitle = styled.h1`
  font-size: 32px;
  margin: 0;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const FieldSet = styled.fieldset`
  margin: 10px;
  border-radius: 4px;
  border: 1px solid #dee2e6;

  input {
    display: block;
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 34px;
    position: relative;
    top: -2px;
  }
`;

export const FormSigninText = styled.p`
  text-align: center;
  font-size: 0.8rem;

  &:first-of-type {
    margin-right: 10px;
  }
`;

export const SignupButton = styled.button`
  width: calc(100% - 20px);
  height: 48px;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
  text-align: center;
  background-color: #8dd3bb;
  transition: all 100ms ease-in-out;
  cursor: pointer;

  span {
    display: inline-block;
    margin-left: 20px;
  }

  &:hover {
    background-color: #55d4a9;
  }
`;
