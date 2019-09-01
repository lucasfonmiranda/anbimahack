import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
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
});

class History extends Component {
    
    state = {
        nome: ''
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSelectIntegracao(id) {

        document.getElementById('1').style.border = '1px solid #ccc';
        document.getElementById('2').style.border = '1px solid #ccc';
        document.getElementById('3').style.border = '1px solid #ccc';
        document.getElementById(id).style.border = '1px solid green';

    }

    render() {

        let { classes } = this.props;
        let { nome } = this.state;

        return (
            <div>
                <div className={classes.contentWrapper}>

                    <form
                        noValidate
                        style={{ padding: 10 }}    
                    >

                        <TextField
                            id="standard-name"
                            label="Nome da integração"
                            placeholder="Nome da Integração"
                            value={nome}
                            style={{ width: '100%' }}
                            name={'nome'}
                            onChange={e => this.handleChange(e)}
                            margin="normal"
                        />

                        <p>Layout de integração: </p>

                        <Card className={classes.card} id="1" onClick={e => this.handleSelectIntegracao(1)}>
                            <CardContent>
                                <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
                                    <b>Layout Carta do Cliente</b>
                                </Typography>
                                <Typography align="center" color="textSecondary" gutterBottom>
                                    <small>Editado em:<br/> 01/09/2019</small>  
                                </Typography>
                                <Typography variant="body2" component="p" align="center">
                                    .docx            
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card className={classes.card} id="2" onClick={e => this.handleSelectIntegracao(2)} >
                            <CardContent>
                                <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
                                    <b>Layout Carta para Administrador</b>
                                </Typography>
                                <Typography align="center" color="textSecondary" gutterBottom>
                                    <small>Editado em: 01/09/2019</small>  
                                </Typography>
                                <Typography variant="body2" component="p" align="center">
                                    .docx                
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card className={classes.card} id="3" onClick={e => this.handleSelectIntegracao(3)}>
                            <CardContent>
                                <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
                                    <b>Conciliação de Posição</b>
                                </Typography>
                                <Typography align="center" color="textSecondary" gutterBottom>
                                    <small>Editado em:<br/> 01/09/2019</small>  
                                </Typography>
                                <Typography variant="body2" component="p" align="center">
                                    .docx                
                                </Typography>
                            </CardContent>
                        </Card>
                    </form>
                    <div style={{ clear: 'both', marginTop: 50 }}>
                        <br/>
                        <Typography align="center" >
                            <Button variant="contained" onClick={e => this.props.history.push('/history-two-step')} color="primary" className={classes.button}>
                                Continuar
                            </Button>
                        </Typography>
                    </div>

                </div>
            </div>
        )
    }
}

export default withStyles(styles)(History);
