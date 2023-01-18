import { memo } from 'react';
import { ErrorMessage } from './style';

const ErrorText = ({ message }) => {
  return <>{message && <ErrorMessage>{message}</ErrorMessage>}</>;
};

export default memo(ErrorText);
