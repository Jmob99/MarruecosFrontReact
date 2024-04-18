import { Route, Routes } from "react-router-dom";

import { CrearCliente } from "./components/CrearCliente";
import { Login } from "./components/login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cliente" element={<CrearCliente />} />
      </Routes>
    </div>
  );
}

export default App;
