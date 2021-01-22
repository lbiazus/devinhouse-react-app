import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Button } from '@material-ui/core';
import {Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { GENERO_INICIAL } from '../util/constantes';

const GeneroSchema = yup.object().shape({
    descricao: yup.string().required('Informe a descrição do Gênero')
})

const CadastroGenero = props => {
    const { genero, salvar, limpar } = props;

    const history = useHistory();
    const [ teveAlteracao, setTeveAlteracao ] = useState(false);

    const salvarGenero = (genero, actions) => {
        actions.setSubmitting(true);
        salvar(genero);
        actions.resetForm();
        actions.setSubmitting(false);
        setTeveAlteracao(false);
    }

    const handleChange = (name, value, setFieldValue) => {
        setTeveAlteracao(true);
        setFieldValue(name, value);
    }

    const handleNovoGenero = (handleReset) => {
        limpar();
        handleReset(GENERO_INICIAL);
    }

    const voltar = () => {
        history.goBack();
    }
    

    return (
        <Formik 
            enableReinitialize
            validateOnMount={true}
            validationSchema={GeneroSchema}
            initialValues={genero || GENERO_INICIAL}
            onSubmit={(values, actions) => salvarGenero(values, actions)}
            render={({ values, touched, errors, isSubmitting, handleReset, setFieldTouched, setFieldValue }) => (
                <Form>
                    <Grid container spacing={3}>
                        <Grid item xs={11}>
                            <Field
                                component={TextField}
                                fullWidth
                                size="small"
                                name="descricao"
                                label="Descrição"
                                value={values.titulo}
                                variant="outlined"
                                onFocus={() => setFieldTouched('descricao')}
                                onChange={e => handleChange('descricao', e.target.value, setFieldValue)}
                                error={touched.titulo && errors.titulo}
                                helperText={touched.titulo && errors.titulo}
                            />
                        </Grid>
                        <Grid item xs={11} >
                            <Grid container spacing={2} justify="flex-end">
                                <Grid item >
                                    <Button variant="contained" onClick={voltar}>Voltar</Button>
                                </Grid>
                                <Grid item >
                                    <Button variant="contained" onClick={() => {handleNovoGenero(handleReset)}}>Novo</Button>
                                </Grid>
                                <Grid item >
                                    <Button variant="contained" color="primary" type="submit" disabled={isSubmitting || !teveAlteracao}>Salvar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Form>
            )}
        />
    )
}

export default CadastroGenero;