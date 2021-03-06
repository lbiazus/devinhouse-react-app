import { Component } from "react";
import { Field, Form, Formik } from "formik";
import * as yup from 'yup';
import './Cadastro.css';
import { Button, Grid, TextField } from "@material-ui/core";
import Elenco from "./Elenco";

const FILME_INICIAL = {
    titulo: '',
    subtitulo: '',
    diretor: '',
    elenco: []
}

const FilmeSchema = yup.object().shape({
    titulo: yup.string()
     .required('Informe o título do filme'),
   subtitulo: yup.string(),
   diretor: yup.string().required('Informe o Diretor do Filme'),
})

class Cadastro extends Component {

    state = { teveAlteracao: false }

    salvarFilme = (filme, actions) => {
        actions.setSubmitting(true);
        this.props.salvar(filme);
        actions.resetForm();
        actions.setSubmitting(false);
        this.setState({teveAlteracao: false});
    }

    handleChange = (name, value, setFieldValue) => {
        this.setState({teveAlteracao: true});
        setFieldValue(name, value);
    }

    handleNovoFilme = (handleReset) => {
        this.props.limpar();
        handleReset(FILME_INICIAL);
    }

    adicionarAtor = (ator, name, values, setFieldValue) => {
        const elenco = values[name];
        elenco.push(ator);
        setFieldValue(name, elenco);
    }

    render() {
        return (
            <Formik 
                enableReinitialize
                validateOnMount={true}
                validationSchema={FilmeSchema}
                initialValues={this.props.filme || FILME_INICIAL}
                onSubmit={(values, actions) => this.salvarFilme(values, actions)}
                render={({ values, touched, errors, isSubmitting, handleReset, setFieldTouched, setFieldValue }) => (
                    <Form>
                        {/* <div className="formulario">
                            <div className="campo-formulario">
                                <label>Título:</label>
                                <Field
                                    className="input-formulario"
                                    name="titulo"
                                    placeholder="Titulo"
                                />
                                {touched.titulo && errors.titulo && <span className="erro-campo-formulario">{errors.titulo}</span>}
                            </div>
                            <div className="campo-formulario">
                                <label>Subtitulo:</label>
                                <Field
                                    className="input-formulario"
                                    name="subtitulo"
                                    placeholder="Subtitulo"
                                />
                                {touched.subtitulo && errors.subtitulo && <span className="erro-campo-formulario">{errors.subtitulo}</span>}
                            </div>
                            <div className="campo-formulario">
                                <label>Diretor:</label>
                                <Field
                                    className="input-formulario"
                                    name="diretor"
                                    placeholder="Diretor"
                                />
                                {touched.diretor && errors.diretor && <span className="erro-campo-formulario">{errors.diretor}</span>}
                            </div>
                            <div className="botoes">
                                <button className="botao-formulario" onClick={() => {handleReset(FILME_INICIAL)}}>Novo</button>
                                <button className="botao-formulario" type="submit">Salvar</button>
                            </div>
                        </div> */}
                        <Grid container spacing={3}>
                            <Grid item xs={11}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    size="small"
                                    name="titulo"
                                    label="Título"
                                    value={values.titulo}
                                    variant="outlined"
                                    onFocus={() => setFieldTouched('titulo')}
                                    onChange={e => this.handleChange('titulo', e.target.value, setFieldValue)}
                                    error={touched.titulo && errors.titulo}
                                    helperText={touched.titulo && errors.titulo}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    size="small"
                                    label="Subtitulo"
                                    name="subtitulo"
                                    value={values.subtitulo}
                                    onFocus={() => setFieldTouched('subtitulo')}
                                    onChange={e => this.handleChange('subtitulo', e.target.value, setFieldValue)}
                                    variant="outlined"
                                    error={touched.subtitulo && errors.subtitulo}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    size="small"
                                    name="diretor"
                                    value={values.diretor}
                                    onChange={e => this.handleChange('diretor', e.target.value, setFieldValue)}
                                    onFocus={() => setFieldTouched('diretor')}
                                    label="Diretor"
                                    variant="outlined"
                                    error={touched.diretor && errors.diretor}
                                    helperText={touched.diretor && errors.diretor}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Field
                                    component={Elenco}
                                    fullWidth
                                    size="small"
                                    name="elenco"
                                    elenco={values.elenco}
                                    adicionarAtor={ator => this.adicionarAtor(ator, 'elenco', values, setFieldValue)}
                                    onChange={e => this.handleChange('elenco', e.target.value, setFieldValue, setFieldTouched)}
                                    onFocus={() => setFieldTouched('diretor')}
                                />
                            </Grid>
                            <Grid item xs={11} >
                                <Grid container spacing={2} justify="flex-end">
                                    <Grid item >
                                        <Button variant="contained" onClick={() => {this.handleNovoFilme(handleReset)}}>Novo</Button>
                                    </Grid>
                                    <Grid item >
                                        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting || !this.state.teveAlteracao}>Salvar</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            />
        )
    }
}

export default Cadastro;