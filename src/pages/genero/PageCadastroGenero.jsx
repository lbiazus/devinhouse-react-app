import { useState } from "react";
import { useDispatch } from 'react-redux';
import CadastroGenero from "../../genero/CadastroGenero";
import { inserirGenero } from '../../redux/genero/actions';
import Page from "../Page";

const PageCadastroGenero = () => {

    const dispatch = useDispatch();
    
    const [ genero, setGenero ] = useState({descricao: "Comédia"})

    const salvarGenero = genero => {
        if (genero.id) {

            return;
        }

        const action = inserirGenero(genero);
        console.log("inserirGenero(genero) ", action);
        dispatch(action);
    }

    const limparFilmeEmEdicao = () => {
        
    }

    return (
        <Page titulo="Generos" subtitulo="Cadastro de Generos">
            <CadastroGenero genero={genero} salvar={salvarGenero} limpar={limparFilmeEmEdicao} />
        </Page>
    )
}

export default PageCadastroGenero;