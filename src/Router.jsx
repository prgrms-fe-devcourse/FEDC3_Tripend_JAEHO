import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './pages/Header';
import AccountPage from './pages/AccountPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

import HomePage from './pages/HomePage';
import MySettingPage from './pages/MySettingPage';
import MyPosterPage from './pages/MyPosterPage';

import MissingPage from './pages/NotFound';

import AuthUserRoute from './components/RequireAuth';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* public routes /*/}
        <Route exact path="/" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignupPage />} />

        {/* login routes */}
        <Route
          path="/main/*"
          element={
            <AuthUserRoute>
              <HomePage />
            </AuthUserRoute>
          }
        >
          <Route
            path=":id"
            element={
              <AuthUserRoute>
                <HomePage />
              </AuthUserRoute>
            }
          ></Route>
        </Route>

        <Route
          exact
          path="/account"
          element={
            <AuthUserRoute>
              <AccountPage />
            </AuthUserRoute>
          }
        />

        <Route
          exact
          path="/myhome"
          element={
            <AuthUserRoute>
              <MyPosterPage />
            </AuthUserRoute>
          }
        />

        <Route
          exact
          path="/setting"
          element={
            <AuthUserRoute>
              <MySettingPage />
            </AuthUserRoute>
          }
        />

        <Route path="/*" element={<MissingPage />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
