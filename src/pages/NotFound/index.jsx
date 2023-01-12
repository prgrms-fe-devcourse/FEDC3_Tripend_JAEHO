import { Navigate } from 'react-router-dom';
const MissingPage = () => {
  return (
    <>
      <Navigate to="/" replace />
    </>
  );
};
export default MissingPage;
