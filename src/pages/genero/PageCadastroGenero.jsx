import { useState } from "react";
import CadastroGenero from "../../genero/CadastroGenero";
import Page from "../Page";

const PageCadastroGenero = () => {

    const [ genero, setGenero ] = useState({descricao: "Comédia"})

    return (
        <Page titulo="Generos" subtitulo="Cadastro de Generos">
            <CadastroGenero genero={genero} />
        </Page>
    )
}

export default PageCadastroGenero;