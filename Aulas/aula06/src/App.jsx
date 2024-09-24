import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Erro404 from "./pages/Erro404";
import Home from './Pages/Home';
import Layout from './pages/Layout';
import Login from './Pages/Login';
import Perfil from './pages/Perfil';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route index element={<Login />}/>
    <Route element={<Layout/>} >
      <Route path="/home" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      </Route>
    <Route path="*" element={<Erro404 />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App
