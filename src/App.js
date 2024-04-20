import { Route, Routes } from "react-router-dom";
import { CrearCliente } from "./components/CrearCliente";
import { Login } from "./components/login";
import { Inicio } from "./components/Inicio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cliente" element={<CrearCliente />} />
        <Route path="/Inicio" element={<Inicio />} />
      </Routes>
    </div>
  );
}

export default App;
