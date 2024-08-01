import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <h1 className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </h1>
  );
}

export default AppNav;
