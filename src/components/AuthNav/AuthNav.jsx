import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNavigation}>
      <NavLink className={css.linkLogin} to="/login">
        Log In
      </NavLink>
      <NavLink className={css.linkRegister} to="/register">
        Registration
      </NavLink>
    </div>
  );
};

export default AuthNav;
