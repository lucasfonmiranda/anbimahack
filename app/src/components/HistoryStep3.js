import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';

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
      paddingBottom: 20
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
    img: {
        padding: 10,
        margin: 5,
        height: 55
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
    column: {
        width: 'calc(50% - 20px)',
        float: 'left',
        padding: 10,
        paddingBottom: 30
    },
    buttonMy: {
        clear: 'both',
        float: 'left',
        border: '1px solid #000 !important',
        margin: 10
    },
    fields: {
        borderRight: '1px solid #000',
        paddingTop:20,
        paddingBottom: 10
    },
    myField: {
        color: '#009be5',
        width: 'auto',
        fontSize: 12
    }
});

class History extends Component {
    
    state = {
        corretora: '',
        rows: [
            { index: 0, title: 'Nome Fundo', referene: '', refereneId: null },
            { index: 1, title: 'Nome Remetente', referene: '', refereneId: null },
            { index: 2, title: 'Nome Cliente', referene: '', refereneId: null },
            { index: 3, title: 'CPF Cliente', referene: '', refereneId: null },
            { index: 4, title: 'CNPJ Remetente', referene: '', refereneId: null },
            { index: 5, title: 'CNPJ Destinatário', referene: '', refereneId: null },
            { index: 6, title: 'Endereço Remetente', referene: '', refereneId: null },
            { index: 7, title: 'Denominação Destinatário', referene: '', refereneId: null },
            { index: 8, title: 'CNPJ Fundo', referene: '', refereneId: null },
            { index: 9, title: 'Quantidade Cotas', referene: '', refereneId: null },
            { index: 10, title: 'E-mail Destinatário', referene: '', refereneId: null },
            { index: 11, title: 'E-mail Remetente', referene: '', refereneId: null }
        ],
        numberClick: 0
    }

    handleClick(referene, id) {

        let { rows, numberClick } = this.state;

        if(numberClick < rows.length) {

            let filter = rows.filter(row => row.refereneId == id);

            if(filter.length > 0) {
                return false;
            }
            
            numberClick++;

            let row = rows[numberClick-1];
            row.referene = referene;
            row.refereneId = id

            rows[numberClick-1] = row;

            this.setState({
                rows: rows,
                numberClick: numberClick
            });
        }
    }

    handleRemove(index) {

        let { rows, numberClick } = this.state;

        rows[index].referene = '';
        rows[index].refereneId = null;

        numberClick--;

        this.setState({
            rows: rows,
            numberClick: numberClick
        });

    }

    render() {

        let { classes } = this.props;
        let { rows } = this.state;

        return (
            <div style={{ paddingBottom: 30}}>
                <div className={classes.contentWrapper} style={{ paddingBottom: 30}}>

                    <div className={classes.column} style={{ textAlign: 'left' }}>
                        <p>Seus Campos</p>
                        <br/>
                        <Button className={classes.buttonMy} id="0" onClick={e => this.handleClick('Denominação distribuidor cessionário', 0)}>
                            Denominação distribuidor cessionário
                        </Button>
                        <Button className={classes.buttonMy} id="1" onClick={e => this.handleClick('Endereço distribuidor cessionário', 1)}>
                           Endereço distribuidor cessionário
                        </Button>
                        <Button className={classes.buttonMy} id="2" onClick={e => this.handleClick('CNPJ distribuidor cessionário', 2)}>
                            CNPJ distribuidor cessionário
                        </Button>
                        <Button className={classes.buttonMy} id="3" onClick={e => this.handleClick('E-Mail distribuidor cessionário', 3)}>
                            E-Mail distribuidor cessionário
                        </Button>
                        <Button className={classes.buttonMy} id="4" onClick={e => this.handleClick('Denominação distribuidor cedente', 4)}>
                            Denominação distribuidor cedente
                        </Button>
                        <Button className={classes.buttonMy} id="5" onClick={e => this.handleClick('CNPJ distribuidor cedente', 5)}>
                            CNPJ distribuidor cedente
                        </Button>
                        <Button className={classes.buttonMy} id="6" onClick={e => this.handleClick('E-Mail distribuidor cedente', 6)}>
                            E-Mail distribuidor cedente
                        </Button>
                        <Button className={classes.buttonMy} id="7" onClick={e => this.handleClick('Nome do Fundo', 7)}>
                            Nome do Fundo
                        </Button>
                        <Button className={classes.buttonMy} id="8" onClick={e => this.handleClick('CNPJ do Fundo', 8)}>
                            CNPJ do Fundo
                        </Button>
                        <Button className={classes.buttonMy} id="9" onClick={e => this.handleClick('Quantidade de cotas', 9)}>
                            Quantidade de cotas
                        </Button>
                        <Button className={classes.buttonMy} id="10" onClick={e => this.handleClick('Nome do cliente', 10)}>
                            Nome do cliente
                        </Button>
                        <Button className={classes.buttonMy} id="11" onClick={e => this.handleClick('CPF do cliente', 11)}>
                            CPF do cliente
                        </Button>
                    </div>

                    <div className={classes.column} style={{ textAlign: 'right'}}>
                        <p>Campos Rico</p>
                        {
                            rows.map(row => (
                                <div className={classes.fields}>
                                    {`${row.title}-----`}
                                    <div className={classes.myField} onClick={e => this.handleRemove(row.index)} style={{ display: row.referene ? 'block' : 'none' }}>
                                      {row.referene}
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <Typography align="center" style={{ clear: 'both' }}>
                        <Button variant="contained" color="primary" onClick={e => {alert("Integrado com sucesso!");  this.props.history.push('/')}}>
                            Salvar
                        </Button>
                    </Typography>

                </div>
                <br/>
            </div>
        )
    }
}

export default withStyles(styles)(History);
