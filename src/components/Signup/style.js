import styled from '@emotion/styled';

export const SignupContainer = styled.div`
  width: 320px;
  height: 320px;
  padding: 5rem;
  border-radius: 2px;
  position: relative;
  bottom: 50px;
`;

export const FieldSet = styled.fieldset`
  margin: 10px;
`;

export const FormSigninText = styled.p`
  text-align: center;
  font-size: 0.8rem;
`;

export const SignupButton = styled.button`
  width: 300px;
  height: 2rem;
  padding: 0.5rem;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
  background-color: #8dd3bb;
`;

export const SignupForm = styled.form`
  display: flex;
  justify-content: flex-end;
  width: 150%;

  h3 {
    font-size: 1.5rem;
    margin-right: 200px;
  }
`;
