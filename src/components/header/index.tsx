import Menu from "../menu";
import Logo from "../logo";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Menu />
        <Logo />
      </div>
    </header>
  );
}
