import styles from "./Button.module.css";

const Button = ({ children, onClick, size, uppercase, type }) => {
  return (
    <button
      className={`${styles.button} ${styles[size] || styles.medium} ${
        uppercase ? styles.uppercase : ""
      }`}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};
export default Button;
