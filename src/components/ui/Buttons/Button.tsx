import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  icon,
  iconPosition = "left",
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={`${styles.button} ${rest.className || ""}`}>
      {icon && iconPosition === "left" && (
        <span className={styles.icon}> {icon}</span>
      )}
      <span className={styles.text}>{children}</span>
      {icon && iconPosition === "right" && (
        <span className={styles.icon}> {icon}</span>
      )}
    </button>
  );
}
