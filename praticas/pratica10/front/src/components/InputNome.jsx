import React from 'react';

// Componente InputNome
const InputNome = (props) => {
  // Declara a constante regras para validação
  const regras = { 
    required: "Nome é obrigatório"
  };

  return (
    <>
      {/* Elemento label */}
      <label htmlFor="nome">Nome</label>
      
      {/* Elemento input */}
      <input 
        type="text" 
        {...props.register("nome", regras)} 
        id="nome" // Adiciona um id para associar com o label
      />

      {/* Renderização condicional das mensagens de erro */}
      {props.error && <p>{props.error.message}</p>}
    </>
  );
};

// Exporta o componente InputNome
export default InputNome;
