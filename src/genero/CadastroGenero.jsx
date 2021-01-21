const CadastroGenero = props => {
    const { genero } = props;

    return (
        <div>
            Cadastro de Generos em construção
            {genero && genero.descricao}
        </div>
    )
}

export default CadastroGenero;