import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, Typography } from '@material-ui/core';

const styles = theme => ({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    form: {
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '40px 16px',
    },
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
    card: {
        maxWidth: 200,
        float: 'left',
        marginRight: 10,
        height: 170
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        width: '100%'
    }
});

class Layout extends Component {

    state = {
        nomeLayout: '',
        checkedA: false,
        checkedB: false,
        checkedC: false
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value ? e.target.value : true
        });
    }

    render() {

        let { classes } = this.props;
        let { nomeLayout, checkedA, checkedB, checkedC } = this.state;

        return(
            <div>
                <AppBar className={classes.searchBar} position="static" color="#FFF" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <AddIcon className={classes.block}  />
                            </Grid>
                            <Grid item xs>
                               Novo Layout
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div>
                    <form
                        noValidate
                        className={classes.form}
                        method="post">
                        
                        <TextField
                            id="standard-name"
                            label="Nome do Layout"
                            className={classes.textField}
                            value={nomeLayout}
                            name="nomeLayout"
                            onChange={e => this.handleChange(e)}
                            margin="normal"
                        />

                        <p>Autenticação Digital:</p>

                        <FormControlLabel
                            control={
                                <Checkbox checked={checkedA} onChange={e => this.handleChange(e)} name="checkedA" />
                            }
                            label="CERTISIGN"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={checkedB} onChange={e => this.handleChange(e)} name="checkedB" />
                            }
                            label="DOCUSIGN"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={checkedC} onChange={e => this.handleChange(e)} name="checkedC" />
                            }
                            label="Não se Aplica"
                        />
                        <br/><br/><br/>
                        <Typography align="center" >
                            <Button variant="contained" onClick={e => this.props.history.push('/layoutForm')} color="primary" className={classes.button}>
                                Continuar
                            </Button>
                        </Typography>
                    </form>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Layout);
