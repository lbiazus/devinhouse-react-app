import React, { Component } from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../filme/Listagem';
import { filmes } from '../util/constantes';

class Filme extends Component {
    constructor(props) {
        super(props);

        this.state = {filmes: []}
    }

    componentDidMount() {
        console.log("filmes ", this.state.filmes);
        this.setState({filmes: filmes});
        console.log("filmes depois do setState: ", this.state.filmes);
        //console.log("this.state.filmeEmEdicao na Montagem", this.state.filmeEmEdicao);
    }

    render() {
        return (
            <React.Fragment>
                <EstruturaDaPagina title="Filmes">
                    <Section titulo="Cadastro de Filmes" />
                    <Section titulo="Listagem de Filmes">
                        <Listagem filmes={this.state.filmes}/>
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