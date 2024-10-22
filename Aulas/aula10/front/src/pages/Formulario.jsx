import { useForm} from 'react-hook-form';
import InputNome from '../components/InputNome';
import InputTelefone from '../components/InputTelefone';

function Formlutario(props) {
    const {register, handleSubmit, formState : {errors},
} = useForm();

    return (
     <form onSubmit={handleSubmit(props.trataEnviar)}>
        <InputNome register={register} error={errors.nome} />
        <InputTelefone register={register} error={errors.telefone} />
        <button type="submit">Salvar</button>

     </form>
    );
}