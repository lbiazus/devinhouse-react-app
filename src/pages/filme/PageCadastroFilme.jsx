import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EstruturaDaPagina from "../../components/EstruturaDaPagina";
import Section from "../../components/Section";
import Cadastro from "../../filme/Cadastro";
import FilmeAPI from '../../services/filme';
import { FILME_INICIAL } from '../../util/constantes';

const PageCadastroFilme = props => {

    const { id } = useParams();
    console.log("id ", id);

    const [filmeEmEdicao, setFilmeEmEdicao] = useState({});

    useEffect(() => {
        if (!id) {
            setFilmeEmEdicao(FILME_INICIAL);
            return;
        }

        carregarFilme(id);
    }, [id]);

    const carregarFilme = async id => {
        const filme = await FilmeAPI.buscarFilme(id);
        setFilmeEmEdicao(filme);
    }

    useEffect(() => {
        console.log("filmeEmEdicao no Update", filmeEmEdicao);
    }, [filmeEmEdicao]);

    const salvarFilme = filme => {
        if (filme.id) {
            FilmeAPI.atualizarFilme(filme).then(() => {
                setFilmeEmEdicao(null);
            });
            return;
        }

        FilmeAPI.inserirFilme(filme).then(() => {
            setFilmeEmEdicao(null);
        });
    }

    const limparFilmeEmEdicao = () => {
        setFilmeEmEdicao(null);
    }

    return (
        <EstruturaDaPagina title="Filmes">
            <Section titulo="Cadastro de Filmes">
                <Cadastro filme={filmeEmEdicao} salvar={salvarFilme} limpar={limparFilmeEmEdicao}/>
            </Section>
        </EstruturaDaPagina>
    )
}

export default PageCadastroFilme;