import Link from "next/link";
import classes from './navigation.module.css'
function Navigation() {
  return (
    <div className="section-center">
    <div  className={classes.nav}>
      <h2>Logo goes here</h2>
      <ul className={classes.navLinks}>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <Link href="/about">Contact</Link>
        </li>
        <li>
          <Link href="/about">Get Started</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Navigation;
