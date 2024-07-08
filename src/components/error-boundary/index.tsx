import { IErrorBoundary } from "./types";
import styles from "./index.module.css";

export default function ErrorBoundary({ message, reset }: IErrorBoundary) {
  return (
    <div className={styles.errorBoundary}>
      <h2 className={styles.error}>
        {message || "Something went wrong. Please try again!"}
      </h2>
      <button className={styles.btn} onClick={reset}>
        Try again
      </button>
    </div>
  );
}
