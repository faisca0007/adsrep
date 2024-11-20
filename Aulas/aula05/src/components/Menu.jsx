function Menu(props) {
  const opcoes = [
   {rota: "/login", texto: "Sair"},
   {rota: "/Home", texto: "Home"},
   {rota: "/perfil", texto: "Perfil"}
  ];

 const  aoClicar =(e) => {
    e.preventDefault(); //ignora ação no navegador 
    const rota = e.target.getAttribute("href");
    props.navegarPara(rota);
    }

  return (
    <nav>
       <ul>
      {opcoes.map((opcao, index) => (
        <li key={index}>
            <a href={opcao.rota} onClick={aoClicar}>{opcao.texto}</a>
        </li>    
      ))} 
       </ul>
    </nav>
  );
  }

  export default Menu;



  




