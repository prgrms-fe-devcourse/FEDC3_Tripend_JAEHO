import { Navigate, Outlet } from 'react-router-dom';

const RequireUser = ({ isLogin, children }) => {
  if (!isLogin) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default RequireUser;
