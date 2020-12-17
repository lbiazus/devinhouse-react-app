import React, { Component } from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../filme/Listagem';
import { filmes } from '../util/constantes';

class Filme extends Component {
    constructor(props) {
        super(props);

        this.state = {filmes: []};
        //this.editarFilme = this.editarFilme.bind(this);
        this.excluirFilme = this.excluirFilme.bind(this);
    }

    componentDidMount() {
        console.log("filmes ", this.state.filmes);
        this.setState({filmes: filmes});
        console.log("filmes depois do setState: ", this.state.filmes);
        console.log("this.state.filmeEmEdicao na Montagem", this.state.filmeEmEdicao);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.filmeEmEdicao === prevState.filmeEmEdicao) {
            return;
        }

        console.log("this.state.filmeEmEdicao no Update", this.state.filmeEmEdicao);
    }

    editarFilme = (filme) => {
        console.log("Filme em Edição no componente Filme: ", filme);
        this.setState({filmeEmEdicao: filme});
    }

    excluirFilme(filmeAExcluir)  {
        console.log("Filme Excluído  no componente Filme: ", filmeAExcluir);
        this.setState({filmes: this.state.filmes.filter(filme => filme.titulo !== filmeAExcluir.titulo)})
    }

    render() {
        return (
            <React.Fragment>
                <EstruturaDaPagina title="Filmes">
                <Section titulo="Cadastro de Filmes">
                    <>{this.state.filmeEmEdicao && <span>Filme em Edição: {this.state.filmeEmEdicao.titulo}</span>}</>
                </Section>
                <Section titulo="Listagem de Filmes">
                    <Listagem filmes={this.state.filmes} editar={this.editarFilme} excluir={this.excluirFilme} />
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
}

export default Filme;