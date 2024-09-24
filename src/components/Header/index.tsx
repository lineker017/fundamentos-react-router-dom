import "./styles.css";
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header-container">
      <h1>Logo</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
      </nav>
    </div>
  );
}
