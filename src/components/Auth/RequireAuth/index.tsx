import { Navigate, useLocation } from 'react-router-dom';
import { TOKEN } from '@/utils/constants/auth';
import { getStorage } from '@/utils/storage';
import { PropsWithChildren } from 'react';

export const AuthUserRoute = ({ children }: PropsWithChildren) => {
  let location = useLocation();
  if (!getStorage(TOKEN)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};
export default AuthUserRoute;
