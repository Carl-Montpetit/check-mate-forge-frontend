import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.siteTitle}>
        Check Mate Forge
      </a>
      <ul>
        <li className="active">
          <a href="/create-account">Create an account</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
