import React from 'react'; // Importa o React
import { useForm } from 'react-hook-form'; // Importa o hook useForm do React Hook Form
import InputNome from '../components/InputNome'; // Importa o componente InputNome
import InputTelefone from '../components/InputTelefone'; // Importa o componente InputTelefone

function Formulario(props) {
  // Inicializa o useForm com os valores passados por props
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: props.valores });

  // Define a função para tratar o envio do formulário
  const onSubmit = (data) => {
    props.trataEnviar(data); // Chama a função passada por props com os dados do formulário
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}> {/* Adiciona a propriedade onSubmit */}
      <InputNome register={register} error={errors.nome} /> {/* Componente para nome */}
      <InputTelefone register={register} error={errors.telefone} /> {/* Componente para telefone */}
      <button type="submit">Salvar</button> {/* Botão para salvar */}
    </form>
  );
}

export default Formulario; // Exporta o componente para ser usado em outros módulos
