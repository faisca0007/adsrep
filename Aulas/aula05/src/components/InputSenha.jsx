function InputSenha(props) {
    return (
        <>
            <label htmlForm='senha'>Senha</label>
            <input type="password"
             id="senha"
             name="senha"
             value={props.valor}
             
             required />


        </>
    );
}
export default InputSenha;