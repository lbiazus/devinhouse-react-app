import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid } from "@material-ui/core";
import EstruturaDaPagina from "../../components/EstruturaDaPagina";
import Section from "../../components/Section";
import Listagem from "../../filme/Listagem";
import { buscarFilmes, excluirFilme } from '../../redux/filme/actions';
import { getFilmes } from '../../redux/filme/selectors';
import Busca from '../../components/Busca';

const PageListaFilme = props => {

    const filmes = useSelector(getFilmes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(buscarFilmes());
    }, [dispatch]);

    const handleExcluirFilme = filme => {
        dispatch(excluirFilme(filme));
    }

    const filtrar = filtro => {
        console.log("Filtro: ", filtro)
        dispatch(buscarFilmes(filtro));
    }

    return (
        <EstruturaDaPagina title="Filmes">
            <Section titulo="Listagem de Filmes">
                <Grid container spacing={2} >
                    <Grid item xs={11} >
                        <Grid item >
                            <Busca filtrarDados={filtrar} />
                        </Grid>
                        <Grid container spacing={2} justify="flex-end">
                            <Grid item >
                                <Button variant="contained" component={Link} to="/filmes/cadastro">Novo</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Listagem filmes={filmes} excluir={handleExcluirFilme} />
                    </Grid>
                </Grid>
            </Section>
        </EstruturaDaPagina>
    )
}

export default PageListaFilme;