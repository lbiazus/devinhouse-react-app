import React, { Component } from 'react';
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { papeis } from '../util/constantes';
import AddIcon from '@material-ui/icons/AddCircle';

const STATE_INICIAL = {
    ator: '',
    personagem: '',
    papel: ''
}

class Elenco extends Component {
    constructor(props) {
        super(props);
        this.state = STATE_INICIAL;
    }

    handleChangeAtor(value) {
        this.setState({ator: value});
    }

    handleChangePersonagem(value) {
        this.setState({personagem: value});
    }

    handleChangePapel(value) {
        this.setState({papel: value});
    }

    adicionarAtor(ator) {
        this.props.adicionarAtor(ator);
        this.setState({...STATE_INICIAL});
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={11} ><InputLabel>Elenco:</InputLabel></Grid>
                <Grid item xs={11} style={{marginLeft: 25}}>
                    <TextField label="Ator" value={this.state.ator} onChange={e => this.handleChangeAtor(e.target.value)} variant="outlined" size="small" style={{width: 300}} />
                    <TextField 
                        label="Personagem" 
                        value={this.state.personagem}
                        onChange={e => this.handleChangePersonagem(e.target.value)}
                        style={{marginLeft: 10, width: 300}}
                        variant="outlined" 
                        size="small" />
                    <FormControl variant="outlined" size="small" style={{marginLeft: 10, width: 150}} >
                        <InputLabel id="papel">Papel</InputLabel>
                        <Select
                            labelId="papel"
                            value={this.state.papel}
                            onChange={e => this.handleChangePapel(e.target.value)} >
                            {papeis.map(papel => <MenuItem key={papel} value={papel}>{papel}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <IconButton color="primary" onClick={() => this.adicionarAtor({...this.state})}>
                        <AddIcon />
                    </IconButton>
                    <Grid container spacing={1}>
                        {this.props.elenco && this.props.elenco.length > 0 && 
                            this.props.elenco.map(ator => 
                                <Grid item xs={11} key={ator.ator}>
                                    <InputLabel>{`Ator/Atriz: ${ator.ator} - Personagem: ${ator.personagem} - Papel: ${ator.papel}`}</InputLabel>
                                </Grid>
                        )}    
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Elenco;