import axios from 'axios';

// Declara a constante url com o valor da variável de ambiente
const url = import.meta.env.VITE_API_URL;

// Função para buscar todos os contatos
const buscarTodos = () => {
  return axios.get(url)
    .then((response) => {
      return {
        sucesso: true,
        dados: response.data,
      };
    })
    .catch((error) => {
      console.error("Erro ao buscar contatos:", error);
      return {
        sucesso: false,
        mensagem: "Ocorreu um erro!",
      };
    });
};

// Função para buscar um contato específico pelo ID
const buscarUm = (id) => {
  return axios.get(`${url}/${id}`)
    .then((response) => {
      return {
        sucesso: true,
        dados: response.data,
      };
    })
    .catch((error) => {
      console.error("Erro ao buscar contato:", error);
      return {
        sucesso: false,
        mensagem: "Ocorreu um erro!",
      };
    });
};

// Função para adicionar um novo contato
const adicionar = (contato) => {
  return axios.post(url, contato)
    .then((response) => {
      return {
        sucesso: true,
        dados: response.data,
      };
    })
    .catch((error) => {
      console.error("Erro ao adicionar contato:", error);
      return {
        sucesso: false,
        mensagem: "Ocorreu um erro!",
      };
    });
};

// Função para atualizar um contato existente
const atualizar = (contato) => {
  return axios.put(`${url}/${contato.id}`, { nome: contato.nome, telefone: contato.telefone })
    .then((response) => {
      return {
        sucesso: true,
        dados: response.data,
      };
    })
    .catch((error) => {
      console.error("Erro ao atualizar contato:", error);
      return {
        sucesso: false,
        mensagem: "Ocorreu um erro!",
      };
    });
};

// Função para remover um contato pelo ID
const remover = (id) => {
  return axios.delete(`${url}/${id}`)
    .then((response) => {
      return {
        sucesso: true,
        dados: response.data,
      };
    })
    .catch((error) => {
      console.error("Erro ao remover contato:", error);
      return {
        sucesso: false,
        mensagem: "Ocorreu um erro!",
      };
    });
};

// Exporta as funções para uso em outros módulos
export { buscarTodos, buscarUm, adicionar, atualizar, remover };


