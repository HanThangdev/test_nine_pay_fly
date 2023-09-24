import { Fragment, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './states/store';
import Loader from './components/Loader';
import { ProtectedRoute } from './routes/ProtectedRoute';


function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

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
            {routes.map((route, _) => {
              const Protected = route.isProtected ? ProtectedRoute : Fragment;
              const Layout = route.layout ?? Fragment;
              const Component = route.component;
              return (
                <Route
                  key={_}
                  path={route.path}
                  element={
                    <Protected>
                      <Layout>
                        <Suspense fallback={<Loader />}>
                          <Component />
                        </Suspense>
                      </Layout>
                    </Protected>
                  }
                />
              );
            })}
          </Routes>
          {/* <Routes>
          <Route path="/auth/signin/:code" element={<SignIn />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/verify" element={<Verify />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route
            path="/register-pricing-plan"
            element={
              !Boolean(token) ? (
                <Navigate to="/auth/signin" />
              ) : (
                <RegisterPricingPlan />
              )
            }
          />
          <Route
            path="/auth/forgot-password/:code"
            element={<ForgotPasswordVerify />}
          />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route element={<DefaultLayout />}>
            <Route
              index
              element={
                !Boolean(token) ? (
                  <Navigate to="/auth/signin" />
                ) : (
                  <ManageChatbot />
                )
              }
            />
            {routes.map(({ path, component: Component }) => (
              <Route
                path={path}
                key={path}
                element={
                  !Boolean(token) ? (
                    <Navigate to="/auth/signin" />
                  ) : (
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  )
                }
              />
            ))}
          </Route>
        </Routes> */}
        </Provider>
    </>
  );
}

export default App;
