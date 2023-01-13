import { Navigate, Outlet, Route, useLocation } from 'react-router-dom';
import { TOKEN } from '../../utils/auth/constant';
import { getStorage } from '../../utils/storage';

export const AuthUserRoute = ({ children }) => {
  let location = useLocation();
  if (!getStorage(TOKEN)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};
export default AuthUserRoute;
