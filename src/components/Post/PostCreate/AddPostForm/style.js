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
  width: 480px;
  height: calc(100% - 4px);
  border-radius: 10px;
  border: 2px dashed #addbbd;
  margin-right: 40px;
  background-color: #f2fffa;
  transition: all 100ms ease-in-out;
  overflow: hidden;

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
  z-index: 100;
`;

export const ImageFileContent = styled.div`
  width: 100%;
  height: 100%;
  max-height: 488px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 20px;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const Description = styled.span`
  color: #676767;
  font-size: 14px;
  font-weight: 400;
`;

export const UploadedImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  font-size: 14px;

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input,
  select,
  textarea {
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }

  input,
  select {
    height: 34px;
    padding-left: 14px;
  }

  input[type='number'] {
    height: 30px;
  }

  input[type='date'] {
    position: relative;
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }

  select {
    border: 0;
    border-right: 10px solid transparent;
    outline: 1px solid #dddddd;
  }

  textarea {
    height: 82px;
    padding: 14px;
    resize: none;
    flex-grow: 1;
  }

  textarea:focus {
    outline: none;
  }
`;

export const InputsAlign = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;

  input {
    width: 200px;
  }

  select {
    width: 254px;
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
