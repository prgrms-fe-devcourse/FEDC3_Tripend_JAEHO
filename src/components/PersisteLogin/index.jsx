import { useEffect, useState } from 'react';
import useRefreshToken from '../../hooks/useRefreshToken';
import { Outlet } from 'react-router-dom';
const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useRefreshToken();

  // refresh 할때마다 데이터를 요청해서 유지되게 만들어주는거
  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (e) {
        alert(e);
      }
    };

    verifyRefreshToken();
  }, []);
};
export default PersistLogin;
