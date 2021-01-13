import React, { useState, useEffect } from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Cadastro from '../filme/Cadastro';
import Listagem from '../filme/Listagem';
import FilmeAPI from '../services/filme';

const Filme = props => {

    const [filmes, setFilmes] = useState([]);
    const [filmeEmEdicao, setFilmeEmEdicao] = useState();

    useEffect(() => {
        carregarFilmes();
    }, []);

    useEffect(() => {
        console.log("filmeEmEdicao no Update", filmeEmEdicao);

        return () => {console.log("Encerrou o Componente")};
    }, [filmeEmEdicao]);

    const carregarFilmes = async () => {
        const filmes = await FilmeAPI.buscarFilmes();
        setFilmes(filmes);
    }

    const editarFilme = (filme) => {
        setFilmeEmEdicao(filme);
    }

    const excluirFilme = filme => {
        FilmeAPI.excluirFilme(filme.id).then(() => carregarFilmes());
    }

    const salvarFilme = filme => {
        if (filme.id) {
            FilmeAPI.atualizarFilme(filme).then(() => {
                carregarFilmes();
                setFilmeEmEdicao(null);
            });
            return;
        }

        FilmeAPI.inserirFilme(filme).then(() => {
            carregarFilmes();
            setFilmeEmEdicao(null);
        });
    }

    const limparFilmeEmEdicao = () => {
        setFilmeEmEdicao(null);
    }

    return (
        <React.Fragment>
            <EstruturaDaPagina title="Filmes">
                <Section titulo="Cadastro de Filmes">
                    <Cadastro filme={filmeEmEdicao} salvar={salvarFilme} limpar={limparFilmeEmEdicao}/>
                </Section>
                <Section titulo="Listagem de Filmes">
                    <Listagem filmes={filmes} editar={editarFilme} excluir={excluirFilme} />
                </Section>
            </EstruturaDaPagina>
            {/* <EstruturaDaPagina title="Filmes" 
                children={[
                    <Section titulo="Cadastro de Filmes" />,
                    <Section titulo="Listagem de Filmes">]}
            /> */}
        </React.Fragment>
    )
}

export default Filme;