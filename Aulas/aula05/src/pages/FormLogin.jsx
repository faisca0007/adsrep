import{useState} from 'react';
import Botao from "../components/Botao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function FormLogin(props){
    const [email, setEmail] = useState("jose@iesb.br");
    const [senha, setSenha] = useState(12345);

    const aoClicar =(e) => {
        e.preventDefault();
        props.navegaPara("/home");
        //fazer chamada ao backend
}
return(
<>
  <InputEmail valor={email} mudaValor={setEmail} />
  <InputSenha valor={senha} mudaValor={setSenha} />
  <Botao texto="Entrar"  />
</>
);
}
export default FormLogin;