import Rodape from '../components/Rodape';
import Logo from '../components/Logo';
import Titulo from '../components/Titulo';
import InputEmail from '../components/InputEmail';
import InputSenha from'../components/InputSenha';
import BotaoEntrar from '../components/BotaoEntrar';
import Link from'../components/Link';

function Login(){
return (
<>
  <main>
    <Logo />
    <Titulo />
    <InputEmail />
    <InputSenha />
    <BotaoEntrar />
    <Link />
  </main>
  <Rodape />
</>
);
}
export default Login;

