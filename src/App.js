
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { CrearCliente } from "./components/CrearCliente";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cliente" element={<CrearCliente />} />
      </Routes>
    </div>
  );
}

export default App;
