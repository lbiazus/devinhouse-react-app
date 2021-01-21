import { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core"

const Busca = props => {

    const { filtrarDados } = props;

    const [ filtro, setFiltro ] = useState();
    
    return (
        <Grid container spacing={2} >
            <Grid item xs={11} >
                <Grid item >
                    <TextField variant="outlined" onChange={(e) => setFiltro(e.target.value)} size="small">Novo</TextField>
                    <Button variant="contained" onClick={() => filtrarDados(filtro)}>Buscar</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Busca;