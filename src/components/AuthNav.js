import { NavLink } from "react-router-dom";
import routes from "../routes";
import './Navigation.scss';

const AuthNav = () => {
  return (
    <nav className="nav">
      <NavLink
        className="nav__link"
        exact
        to={routes.register}
        activeClassName="nav__link--active"
      >
        Sign Up
      </NavLink>
      <NavLink
        className="nav__link"
        exact
        to={routes.login}
        activeClassName="nav__link--active"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
