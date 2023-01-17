import styled from '@emotion/styled';

export const SignupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
`;

export const SignupWrapper = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
  bottom: 100px;
`;

export const SignupTitle = styled.div`
  font-size: var(--font-title-size);
`;

export const FormSignupText = styled.p`
  font-size: var(--font-subtitle-size);
  margin-right: 50px;
  color: var(--font-input-color);
`;

export const FieldSet = styled.fieldset`
  height: 2rem;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 2px;
  outline: none;
  font-size: var(--font-input-size);

  ::placeholder {
    color: var(--font-input-color);
  }

  &:focus {
    color: #495057;
    border-color: black;
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
  width: 100%;
  height: 3rem;
  padding: 0.7rem;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  outline: none;
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;
  background-color: #8dd3bb;
  cursor: pointer;

  &:focus {
    color: #495057;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
