import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { RegistroEmpleados } from "./components/RegistroEmpleados";
import { CrearCliente } from "./components/CrearCliente";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/empleados" element={<RegistroEmpleados />} />
        <Route path="/cliente" element={<CrearCliente />} />
      </Routes>
    </div>
  );
}

export default App;
