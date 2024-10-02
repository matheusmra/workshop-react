import style from './Navbar.module.css';
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <header className={style.navbar}>
      <h1><a>WebTech PUC Minas</a></h1>
      <nav>
        <ul>
          <li>
            <Link to="/">React</Link>
            </li>
          <li>
          <Link to="next">Next</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
