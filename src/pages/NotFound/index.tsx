import { NavLink } from "react-router-dom";
import "./styles.css";

export default function NotFound() {
  return (
    <div className="login-container">
      <h1>Erro 404 - Nenhuma página encontrada</h1>

      <NavLink to='/'>Voltar para o início</NavLink>
    </div>
  );
}
