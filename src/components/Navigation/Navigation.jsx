import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

const Navigation = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/psychologists">
        Psychologists
      </NavLink>
      {/* {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Favorites
        </NavLink>
      )} */}
    </nav>
  );
};

export default Navigation;
