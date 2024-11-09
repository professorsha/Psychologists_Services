import css from './Logo.module.css';
import { NavLink } from 'react-router-dom';
export default function Logo() {
  return (
    <>
      <NavLink to="/">
        <img src="../../../public/Logo.png" width="218"></img>
      </NavLink>
    </>
  );
}
