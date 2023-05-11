import { memo } from 'react';
import { ErrorMessage } from './style';

interface ErrorTextProps {
  message: string;
}

const ErrorText = ({ message }: ErrorTextProps) => {
  return <>{message && <ErrorMessage>{message}</ErrorMessage>}</>;
};

export default memo(ErrorText);
