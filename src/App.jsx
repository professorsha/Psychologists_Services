import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';

// import { refreshUser } from './redux/auth/operations';
// import { selectIsRefreshing } from './redux/auth/selectors';
import Layout from './components/Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { InfinitySpin } from 'react-loader-spinner';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const PsychologistsPage = lazy(() =>
  import('./pages/PsychologistsPage/PsychologistsPage')
);
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  // const dispatch = useDispatch();

  // const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // return isRefreshing ? (
  //   <div className="loader">
  //     <InfinitySpin
  //       visible={true}
  //       width="200"
  //       color="#00f2ff"
  //       ariaLabel="infinity-spin-loading"
  //     />
  //   </div>
  // ) :
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          {/* <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/favorites"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/favorites"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute redirectTo="/login" component={<FavoritesPage />} />
            }
          />*/}
        </Route> 
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
