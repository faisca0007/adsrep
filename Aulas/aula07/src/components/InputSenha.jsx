function InputSenha (props){
    const regras ={
        required:{value: true, message: "Senha é obrigatorio"},
        mingLenght: { value: 6, message:"A senha deve ter no minimo 6 caracteres" 
    },
    };
    return(
        <>
           <label htmlFor="senha">Senha</label>
           <input type="password" {...props.register("senha", regras)} />
           {error && <p>{error.message}</p>}
        </>
    );
}
export default InputSenha;