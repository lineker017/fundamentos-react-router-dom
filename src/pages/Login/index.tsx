import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Login() {
  return (
    <div className="login-container">
      <h1>Fazer login</h1>

      <NavLink to='/auth/register'>Criar conta</NavLink>
    </div>
  );
}
