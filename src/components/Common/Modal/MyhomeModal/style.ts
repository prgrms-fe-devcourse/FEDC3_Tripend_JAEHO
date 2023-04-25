import styled from '@emotion/styled';

const ImageUploader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 460px;
  height: 570px;
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

const Input = styled.input`
  border: 1px solid grey;
  width: 50%;
  display: inline-block;
  height: 90%;
  border-radius: 5px;
`;

const Label = styled.label`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #333;
  display: block;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #8dd3bb;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  padding: 14px;
  flex-shrink: 0;
  cursor: pointer;
  margin-top: 10px;
  transition: all 100ms ease-in-out;
  width: 100%;
  &:hover {
    background-color: #55d4a9;
  }
`;

const ModalRight = styled.div`
  width: 50%;
  height: 400px;
  float: right;
  box-sizing: border-box;
`;

const ModalLeft = styled.div`
  width: 50%;
  height: 400px;
  float: left;
  box-sizing: border-box;
`;

const ModalForm = styled.form``;

const ModalTitleWrapper = styled.div`
  margin-bottom: 20px;
`;
const ModalTitle = styled.h3``;

const InputDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    height: 30px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
  p {
    display: flex;
    flex-wrap: wrap;
  }
`;

const InputTitleWrapper = styled.div`
  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    height: 100%;
    width: 98.7%;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
  textarea {
    width: 98.7%;
    height: 60px;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
`;

const InputPersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 45%;

  margin-right: 40px;

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    height: 35px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
`;

const InputGenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 50%;

  margin-left: 10px;
  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  select {
    width: 1000px;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
`;

export {
  Input,
  Label,
  Button,
  ModalRight,
  ModalLeft,
  ModalTitleWrapper,
  ModalTitle,
  ImageUploader,
  ModalForm,
  InputDayWrapper,
  InputTitleWrapper,
  InputPersonWrapper,
  InputGenderWrapper,
};
