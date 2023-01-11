import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import AccountPage from './pages/AccountPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userLoginState } from './recoil/auth';
import HomePage from './pages/HomePage';
import MySettingPage from './pages/MySettingPage';
import MyPosterPage from './pages/MyPosterPage';
import { TOKEN } from './utils/auth/constant';
import { getStorage } from './utils/storage';
import { useEffect } from 'react';

const AppRouter = () => {
  const token = getStorage(TOKEN);
  const [isLogin, setIsLogin] = useRecoilState(userLoginState);

  useEffect(() => {
    if (token) setIsLogin(true);
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/main" element={<HomePage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignupPage />} />

        <Route exact path="/myhome" element={<MyPosterPage />} />
        <Route exact path="/setting" element={<MySettingPage />} />
      </Routes>

      {isLogin && <Footer />}
    </Router>
  );
};
export default AppRouter;
