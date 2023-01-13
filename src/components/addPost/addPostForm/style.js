import styled from '@emotion/styled';

export const PostForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ImageUploader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 460px;
  height: 466px;
  border-radius: 10px;
  border: 2px dashed #addbbd;
  margin-right: 40px;
  background-color: #f2fffa;
  transition: all 100ms ease-in-out;

  &:hover {
    background-color: #daf8ed;
    opacity: 10;
  }
`;

export const ImageFileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`;

export const ImageFileContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 20px;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Description = styled.span`
  color: #676767;
  font-size: 14px;
  font-weight: 400;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;

  label {
    font-weight: 700;
    margin-bottom: 8px;
  }

  input,
  select,
  textarea {
    height: 42px;
    padding-left: 16px;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #8dd3bb;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  padding: 14px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  &:hover {
    background-color: #55d4a9;
  }
`;
