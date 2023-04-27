import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './pages/Header';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

import HomePage from './pages/HomePage';
//import MySettingPage from './pages/MySettingPage';
import MyHomePage from '@/pages/MyHomePage';

import MissingPage from './pages/NotFound';

import AuthUserRoute from './components/Auth/RequireAuth';
import PostDetailPage from './pages/PostDetailPage';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />

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
          path="/myhome"
          element={
            <AuthUserRoute>
              <MyHomePage />
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
