import { useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import EstruturaDaPagina from "../../components/EstruturaDaPagina";
import Section from "../../components/Section";
import Listagem from "../../filme/Listagem";
import FilmeAPI from '../../services/filme';
import { armazenarFilmes } from '../../redux/filme/actions';
import { getFilmes } from "../../redux/filme/selectors";

const PageListaFilme = props => {
    
    const { filmes, armazenarFilmes } = props; 

    useEffect(() => {
        carregarFilmes();
    }, []);

    const carregarFilmes = async () => {
        const filmes = await FilmeAPI.buscarFilmes();
        armazenarFilmes(filmes)
    }

    const excluirFilme = filme =>  {
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

const mapStateToProps = state => ({
    filmes: getFilmes(state)
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(
        {
            armazenarFilmes
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(PageListaFilme);