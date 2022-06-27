import { NavLink } from "react-router-dom";
import "../../scss/components/NavBar.scss";

const NavBar = (props) => {
  const pageLinks = [];

  return (
    <section className="NavBar">
      <nav>
        <NavLink key={0} className="hoverOnly noUnderline" to="/"><h1>App</h1></NavLink>
        {pageLinks}
      </nav>
      <p>({props.message})</p>
    </section>
  )
}

export default NavBar;