import styles from "./Input.module.css";

const Input = ({ name, label, labelText, value, onChange, type }) => {
  return (
    <div className={styles.group}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {labelText}
        </label>
      )}
      <input
        className={styles.input}
        id={name}
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
