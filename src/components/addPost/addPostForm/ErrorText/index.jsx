import { ErrorMessage } from './style';

const ErrorText = ({ message }) => {
  return <>{message && <ErrorMessage>{message}</ErrorMessage>}</>;
};

export default ErrorText;
