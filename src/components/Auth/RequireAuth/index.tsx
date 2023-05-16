import { TOKEN } from '@/utils/constants/auth';
import { getStorage } from '@/utils/storage';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type AuthUserRouterProps = {
  children: ReactJSXElement;
};

export const AuthUserRoute = ({ children }: PropsWithChildren<AuthUserRouterProps>) => {
  let location = useLocation();
  if (!getStorage(TOKEN)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};
export default AuthUserRoute;
