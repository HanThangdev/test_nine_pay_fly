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
        </Provider>
    </>
  );
}

export default App;
