import css from './AppBar.module.css';
import Logo from '../Logo/Logo';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Logo />
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <AuthNav />
    </>
  );
};

export default AppBar;
