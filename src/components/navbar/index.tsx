import NavItem from "../nav-item";
import styles from "./index.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavItem title="Trending" address="fetchTrending" />
      <NavItem title="Top Rated" address="fetchTopRated" />
    </nav>
  );
}
