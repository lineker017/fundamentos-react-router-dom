import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Register() {
  return (
    <div className="register-container">
      <h1>Cria conta</h1>

      <NavLink to='/auth'>Já tenho conta</NavLink>
    </div>
  );
}
