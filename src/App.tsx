import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import ManageChatbot from './pages/ManageChatbot';
import SignIn from './pages/Authentication/login/SignIn';
import SignUp from './pages/Authentication/register/SignUp';
import Verify from './pages/Authentication/verify/Verify';
import ForgotPassword from './pages/Authentication/forgot-password/ForgotPassword';
import ForgotPasswordVerify from './pages/Authentication/forgot-passwordVerify/ForgotPasswordVerify';
import routes from './routes';
import Cookies from 'universal-cookie';
import store from './states/store';
import Loader from './components/Loader';
import Chat from './pages/Chat/Chat';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const cookies = new Cookies();
  const token = cookies.get('access_token');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (
    Boolean(token) &&
    (location.pathname === '/auth/signin' ||
      location.pathname === '/auth/signup' ||
      location.pathname === '/auth/verify' ||
      location.pathname.includes('/auth/forgot-password'))
  ) {
    navigate('/');
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      <Provider store={store}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerClassName="overflow-auto"
        />

        <Routes>
          <Route path="/auth/signin/:code" element={<SignIn />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/verify" element={<Verify />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route
            path="/auth/forgot-password/:code"
            element={<ForgotPasswordVerify />}
          />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route element={<DefaultLayout />}>
            <Route index element={<ManageChatbot />} />
            {routes.map(({ path, component: Component }) => (
              <Route
                path={path}
                key={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
