import { Component } from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';

class Page extends Component {

    render() {
        return (
            <EstruturaDaPagina title={this.props.titulo}>
                <Section titulo={this.props.subtitulo}>
                    {this.props.children}
                </Section>
            </EstruturaDaPagina>
        )
    }
}

export default Page;

