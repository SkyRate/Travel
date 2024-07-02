import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { NavbarData } from "./navbar.data";

export const Navbar = ({ isScrolled }) => {
  return (
    <ul className={isScrolled ? styles.navbarScroll : styles.navbar}>
      {NavbarData.map((item, i) => (
        <li key={i}>
          <Link to={item.to} smooth={true} duration={500}>
            {item.title}
          </Link>
        </li>
      ))}
      {isScrolled && (
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Контакты
          </Link>
        </li>
      )}
    </ul>
  );
};
