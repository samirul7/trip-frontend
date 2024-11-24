import styles from "./AppLayout.module.css";
import Navigation from "../components/Navigation";
import Home from "../pages/home/Home";

const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.navigationContainer}>
        <Navigation />
      </div>
      <div className={styles.bodyContainer}>
        <Home />
      </div>
    </div>
  );
};
export default AppLayout;
