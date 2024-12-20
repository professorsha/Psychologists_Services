import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <>
      <header className={css.container}>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Layout;
