import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "../Formulario";
function Editar() {
  const { id } = useParams();
  const [contato, setContato] = useState({});
  const[erro, setErro] = useState("");

  const carregar = async() => {

  }

  useEffect(() => {
    carregar();
  }, []);

    return (
    <>
    <Cabecalho />
    <Conteudo>
      <h2>Editar Contato </h2>
      <Formulario trataEnviar={() => {}} />
    </Conteudo>  
    
    </>
    );
  }
  
  export default Editar;
  