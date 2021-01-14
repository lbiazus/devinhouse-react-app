import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EstruturaDaPagina from "../../components/EstruturaDaPagina";
import Section from "../../components/Section";
import Cadastro from "../../filme/Cadastro";
import { buscarFilme, inserirFilme, atualizarFilme, limparFilmeAtual } from '../../redux/filme/actions';
import { getFilmeAtual } from '../../redux/filme/selectors';

const PageCadastroFilme = props => {
    
    const filmeEmEdicao = useSelector(getFilmeAtual);
    const dispatch = useDispatch()

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }

        dispatch(buscarFilme(id));

        //return () => dispatch(limparFilmeAtual());
    }, [dispatch, id]);

    useEffect(() => {
        console.log("filmeEmEdicao no Update", filmeEmEdicao);
    }, [filmeEmEdicao]);

    const salvarFilme = filme => {
        if (filme.id) {
            dispatch(atualizarFilme(filme));
            return;
        }

        dispatch(inserirFilme(filme));
    }

    const limparFilmeEmEdicao = () => {
        //dispatch(limparFilmeAtual())
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