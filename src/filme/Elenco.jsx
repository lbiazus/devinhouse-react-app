import React, { useState } from 'react';
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { papeis } from '../util/constantes';
import AddIcon from '@material-ui/icons/AddCircle';

const Elenco = props => {
    const { elenco, adicionarAtor } = props;

    const [ator, setAtor] = useState('');
    const [personagem, setPersonagem] = useState('');
    const [papel, setPapel] = useState('');

    const handleAdicionarAtor = () => {
        const dadosAtor = {
            ator: ator,
            personagem: personagem,
            papel: papel
        }
        adicionarAtor(dadosAtor);
        resetarDadosAtor();
    }

    const resetarDadosAtor = () => {
        setAtor('');
        setPersonagem('');
        setPapel('');
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={11} ><InputLabel>Elenco:</InputLabel></Grid>
            <Grid item xs={11} style={{marginLeft: 25}}>
                <TextField label="Ator" value={ator} onChange={e => setAtor(e.target.value)} variant="outlined" size="small" style={{width: 300}} />
                <TextField 
                    label="Personagem" 
                    value={personagem}
                    onChange={e => setPersonagem(e.target.value)}
                    style={{marginLeft: 10, width: 300}}
                    variant="outlined" 
                    size="small" />
                <FormControl variant="outlined" size="small" style={{marginLeft: 10, width: 150}} >
                    <InputLabel id="papel">Papel</InputLabel>
                    <Select
                        labelId="papel"
                        value={papel}
                        onChange={e => setPapel(e.target.value)} >
                        {papeis.map(papel => <MenuItem key={papel} value={papel}>{papel}</MenuItem>)}
                    </Select>
                </FormControl>
                <IconButton color="primary" onClick={() => handleAdicionarAtor()}>
                    <AddIcon />
                </IconButton>
                <Grid container spacing={1}>
                    {elenco && elenco.length > 0 && 
                        elenco.map(ator => 
                            <Grid item xs={11} key={ator.ator}>
                                <InputLabel>{`Ator/Atriz: ${ator.ator} - Personagem: ${ator.personagem} - Papel: ${ator.papel}`}</InputLabel>
                            </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Elenco;