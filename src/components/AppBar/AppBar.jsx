import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import css from "./AppBar.module.css";

const AppBar = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Logo/>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

export default AppBar;
