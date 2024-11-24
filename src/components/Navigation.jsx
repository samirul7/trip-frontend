import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <p>Trip</p>
      <ul className={styles.list}>
        <NavLink className={styles.listItem} to="/">
          Login
        </NavLink>
      </ul>
    </div>
  );
};
export default Navigation;
