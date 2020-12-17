import React, { Component } from 'react';
import './Listagem.css';

class Listagem extends Component {

    handleEditar(filme) {
        console.log("Filme em Edição: ", filme);
        this.props.editar(filme);
    }

    handleExcluir(filme) {
        console.log("Filme Excluído: ", filme);
        this.props.excluir(filme);
    }

    render() {
        if (!this.props.filmes || this.props.filmes.length === 0) {
            return <span>Não existem filmes a ser listados.</span>
        }

        return (
            <>
                {this.props.filmes && this.props.filmes.length > 0 &&
                    <div className="listagem">
                        <table className="tabela-filmes">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Subtítulo</th>
                                    <th>Diretor</th>
                                    <th className="acoes" colSpan="2">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.filmes.map(filme => (
                                    <tr key={filme.titulo}>
                                        <td>{filme.titulo}</td>
                                        <td>{filme.subtitulo}</td>
                                        <td>{filme.diretor}</td>
                                        <td className="acoes"><button onClick={() => this.handleEditar(filme)}>Editar</button></td>
                                        <td className="acoes"><button onClick={() => this.handleExcluir(filme)}>Excluir</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </>
        )
    }
}

export default Listagem;