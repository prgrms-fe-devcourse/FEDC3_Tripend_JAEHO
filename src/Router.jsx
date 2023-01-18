import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountPage from './pages/accountPage';
import Header from './pages/Header';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/signupPage';

import HomePage from './pages/HomePage';
import MyPosterPage from './pages/MyPosterPage';
import MySettingPage from './pages/MySettingPage';

import MissingPage from './pages/NotFound';

import AuthUserRoute from './components/RequireAuth';
import PostDetailPage from './pages/PostDetailPage';

const AppRouter = () => {
  return (
    //fdsa
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

        <Route
          exact
          path="/p/:postId"
          element={
            <AuthUserRoute>
              <PostDetailPage />
            </AuthUserRoute>
          }
        />

        <Route path="/*" element={<MissingPage />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
