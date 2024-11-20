function Listagem(props) {
    return (
        <ul>
            <li>
                <span>Nome</span>
                <span>Telefone</span>
                <span>Ações</span>
            </li>
            {props.itens.map((contato, key) => (
                <li key={key}>
                </li>
            ))}


        </ul>
    );
}

export default Listagem;