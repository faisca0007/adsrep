import React from 'react';

// Componente InputTelefone
function InputTelefone(props) {
  // Declara a constante regras para validação
  const regras = { 
    required: "Telefone é obrigatório"
  };

  return (
    <>
      {/* Elemento label */}
      <label htmlFor="telefone">Telefone</label>
      
      {/* Elemento input */}
      <input 
        type="text" 
        {...props.register("telefone", regras)} 
        id="telefone" // Adiciona um id para associar com o label
      />

      {/* Renderização condicional das mensagens de erro */}
      {props.error && <p>{props.error.message}</p>}
    </>
  );
}

// Exporta o componente InputTelefone
export default InputTelefone;
