
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { CrearCliente } from "./components/CrearCliente";
import { ListadoClientes } from "./components/ListadoClientes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cliente" element={<CrearCliente />} />
        <Route path="/listado-clientes" element={<ListadoClientes />} />
      </Routes>
    </div>
  );
}

export default App;
