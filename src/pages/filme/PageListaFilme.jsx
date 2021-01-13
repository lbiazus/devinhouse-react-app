import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from "@material-ui/core";
import EstruturaDaPagina from "../../components/EstruturaDaPagina";
import Section from "../../components/Section";
import Listagem from "../../filme/Listagem";
import FilmeAPI from '../../services/filme';

const PageListaFilme = props => {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        carregarFilmes();
    }, []);

    const carregarFilmes = async () => {
        const filmes = await FilmeAPI.buscarFilmes();
        setFilmes(filmes);
    }

    const excluirFilme = filme => {
        FilmeAPI.excluirFilme(filme.id).then(() => carregarFilmes());
    }

    return (
        <EstruturaDaPagina title="Filmes">
            <Section titulo="Listagem de Filmes">
                <Grid container spacing={2} >
                    <Grid item xs={11} >
                        <Grid container spacing={2} justify="flex-end">
                            <Grid item >
                                <Button variant="contained" component={Link} to="/filmes/cadastro">Novo</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Listagem filmes={filmes} excluir={excluirFilme} />
                    </Grid>
                </Grid>
            </Section>
        </EstruturaDaPagina>
    )
}

export default PageListaFilme;