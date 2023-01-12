import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import AccountPage from './pages/AccountPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

import HomePage from './pages/HomePage';
import MySettingPage from './pages/MySettingPage';
import MyPosterPage from './pages/MyPosterPage';

import RequireUser from './components/RequireAuth';
import { useRecoilValue } from 'recoil';
import { userLoginState } from './recoil/auth';
import MissingPage from './pages/NotFound';

const AppRouter = () => {
  const isLogin = useRecoilValue(userLoginState);

  return (
    <Router>
      <Header />

      <Routes>
        {/* public routes /*/}
        <Route exact path="/" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignupPage />} />

        {/* login routes */}
        <Route element={<RequireUser isLogin={isLogin} />}>
          <Route exact path="/main" element={<HomePage />} />

          <Route exact path="/account" element={<AccountPage />} />

          <Route exact path="/myhome" element={<MyPosterPage />} />

          <Route exact path="/setting" element={<MySettingPage />} />
        </Route>

        <Route path="*" element={<MissingPage />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
