import {useContext } from "react";
import { TarefaContext } from "../contexts/TarefaContext";



function ListTarefa() {
   const {tarefas} = useContext(TarefaContext);
  
   return(
     <ul>
      {tarefas.map((item, index) => (
       <li key={index}>{item}</li>
   

      ))}
     </ul>
   );
}

export default ListTarefa;