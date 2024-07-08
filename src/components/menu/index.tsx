import MenuItem from "../menu-item";
import styles from "./index.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <MenuItem title="home" address="/" />
      <MenuItem title="about" address="/about" />
    </div>
  );
}
