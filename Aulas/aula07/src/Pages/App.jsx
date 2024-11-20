import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Perfil from "./Perfil";

function App () {
   return (
    <BrowserRouter>
     <Routes>
       <Route index element={<Login />} />
       <Route path="/home" element={<></>} />
       <Route path="/perfil" element={<Perfil />} />
     </Routes>
     </BrowserRouter>
   );
}
export default App;