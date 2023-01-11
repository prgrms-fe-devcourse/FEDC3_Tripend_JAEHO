import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import AccountPage from './pages/AccountPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userLoginState } from './recoil/auth';
import HomePage from './pages/HomePage';
import MyPostePage from './pages/MyPosterPage';
import MySettingPage from './pages/MySettingPage';

const AppRouter = () => {
  const isLogin = useRecoilValue(userLoginState);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/main" element={<HomePage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
      </Routes>

      {isLogin && <Footer />}
    </Router>
  );
};
export default AppRouter;
