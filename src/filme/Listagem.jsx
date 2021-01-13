import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit' ;
import './Listagem.css';

class Listagem extends Component {

    handleExcluir(filme) {
        this.props.excluir(filme);
    }

    render() {
        if (!this.props.filmes || this.props.filmes.length === 0) {
            return <span>Não existem filmes a ser listados.</span>
        }

        return (
            <>
                {this.props.filmes && this.props.filmes.length > 0 &&
                    <>
                    {/* <div className="listagem">
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
                                    <tr key={filme.id}>
                                        <td>{filme.titulo}</td>
                                        <td>{filme.subtitulo}</td>
                                        <td>{filme.diretor}</td>
                                        <td className="acoes"><button onClick={() => this.handleEditar(filme)}>Editar</button></td>
                                        <td className="acoes"><button onClick={() => this.handleExcluir(filme)}>Excluir</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}
                    <Grid container >
                        <Grid item xs={11}>
                            <TableContainer component={Paper}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Título</TableCell>
                                            <TableCell>Subtitulo</TableCell>
                                            <TableCell>Diretor</TableCell>
                                            <TableCell align="center" colSpan={2}>Ações</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.props.filmes.map(filme => (
                                            <TableRow key={filme.id}>
                                                <TableCell width="25%">{filme.titulo}</TableCell>
                                                <TableCell>{filme.subtitulo}</TableCell>
                                                <TableCell width="20%">{filme.diretor}</TableCell>
                                                <TableCell width="5%" align="center">
                                                    <IconButton color="primary" component={Link} to={`/filmes/cadastro/${filme.id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell width="5%" align="center">
                                                    <IconButton color="primary" onClick={() => this.handleExcluir(filme)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </>
                }
            </>
        )
    }
}

export default Listagem;