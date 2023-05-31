import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthUserRoute from '@/components/Auth/RequireAuth';
import Header from '@/pages/Header';
import HomePage from '@/pages/HomePage';
import MyHomePage from '@/pages/MyHomePage';
import MissingPage from '@/pages/NotFound';
import PostDetailPage from '@/pages/PostDetailPage';
import SigninPage from '@/pages/SigninPage';
import SignupPage from '@/pages/SignupPage';

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
          path="/myhome"
          element={
            <AuthUserRoute>
              <MyHomePage />
            </AuthUserRoute>
          }
        />

        <Route
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
