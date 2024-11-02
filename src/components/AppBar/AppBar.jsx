import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

const AppBar = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

export default AppBar;
