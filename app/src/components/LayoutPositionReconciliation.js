import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
});

class Layout extends Component {

    state = {
        rows: [
            this.createData(0, 'Denominação distribuidor cessionário', 10, '50', 10, 10, 10),
            this.createData(1, 'Endereço distribuidor cessionário', 10, '50', 10, 10, 10),
            this.createData(2, 'CNPJ distribuidor cessionário', 20, '14', 10, 10, 10),
            this.createData(3, 'E-Mail distribuidor cessionário', 10, '50', 10, 10, 10),
            this.createData(4, 'Denominação distribuidor cedente', 10, '50', 10, 10, 10),
            this.createData(5, 'CNPJ distribuidor cedente', 20, '14', 10, 10, 10),
            this.createData(6, 'E-Mail distribuidor cedente', 10, '50', 10, 10, 10),
            this.createData(7, 'Nome do Fundo', 10, '50', 10, 10, 10),
            this.createData(8, 'CNPJ do Fundo', 10, '14', 10, 10, 10),
            this.createData(9, 'Quantidade de cotas', 20, '14,9', 10, 20, 20),
            this.createData(10, 'Nome do cliente', 10, '50', 10, 10, 10),
            this.createData(11, 'CPF do cliente', 20, '11', 10, 10, 10)
        ]
    }

    handleAddRow() {
        
        let { rows } = this.state;

        rows.push({ index: rows.length });

        this.setState({
            rows: rows
        });

    }

    handleRemoveRow(index) {

        let { rows } = this.state;

        rows.splice(index, 1);

        this.setState({
            rows: rows
        });

    }

    createData(index, name, type, len, required, defaul, field) {
        return { "index": index, "name": name, "type": type, "len": len, "required": required, "defaul": defaul, "field": field };
    }

    handleChange(index, e) {

        let { rows } = this.state;
        let row = rows[index];
        row[e.target.name] = e.target.value; 

        rows[index] = row;

        this.setState({
            rows: rows
        });

    }

    render() {

        let { classes } = this.props;
        let { rows } = this.state;

        return(
            <div>
                <AppBar className={classes.searchBar} position="static" color="#FFF" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <AddIcon className={classes.block}  />
                            </Grid>
                            <Grid item xs>
                                Layout Conciliação de Posição
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div className={classes.contentWrapper}>
                    <Typography color="textSecondary" align="center">
                        <Button variant="contained" className={classes.button} onClick={e => this.handleAddRow()}>
                            <AddIcon /> Adicionar Campo
                        </Button>
                    </Typography>

                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome do campo</TableCell>
                                <TableCell align="center">Tipo</TableCell>
                                <TableCell align="center">Tamanho</TableCell>
                                <TableCell align="center">Obrigatório</TableCell>
                                <TableCell align="center">Padronizado com</TableCell>
                                <TableCell align="center">Campo padronização</TableCell>
                                <TableCell align="center">##</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        { rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.index}>
                                <TableCell component="th" scope="row">
                                    <TextField
                                        placeholder="Nome do campo"
                                        value={row.name}
                                        name={'name'}
                                        onChange={e => this.handleChange(row.index, e)}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="type">Tipo</InputLabel>
                                        <Select
                                            value={row.type}
                                            onChange={e => this.handleChange(row.index, e)}
                                            inputProps={{
                                                name: 'type',
                                                id: 'type',
                                            }}
                                        >
                                        <MenuItem value={10}>Texto</MenuItem>
                                        <MenuItem value={20}>Número</MenuItem>
                                        <MenuItem value={30}>Data</MenuItem>
                                        <MenuItem value={40}>Data e Hora</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="center">
                                    <TextField
                                        
                                        label=""
                                        placeholder="Tamanho"
                                        value={row.len}
                                        name={'len'}
                                        onChange={e => this.handleChange(row.index, e)}
                                        margin="normal"
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="required">Obrigatório</InputLabel>
                                        <Select
                                        value={row.required}
                                        onChange={e => this.handleChange(row.index, e)}
                                        inputProps={{
                                            name: 'required',
                                            id: 'required',
                                        }}
                                        >
                                        <MenuItem value={10}>Sim</MenuItem>
                                        <MenuItem value={20}>Não</MenuItem>
                                        
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="center">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="defaul">Padronizado</InputLabel>
                                        <Select
                                        value={row.defaul}
                                        onChange={e => this.handleChange(row.index, e)}
                                        inputProps={{
                                            name: 'defaul',
                                            id: 'defaul',
                                        }}
                                        >
                                        <MenuItem value={10}>Não</MenuItem>
                                        <MenuItem value={20}>ANBIMA</MenuItem>
                                        <MenuItem value={30}>CVM</MenuItem>
                                        <MenuItem value={40}>CR3</MenuItem>
                                        </Select>
                                    </FormControl>

                                </TableCell>
                                <TableCell align="center">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="field">Campo</InputLabel>
                                        <Select
                                        value={row.field}
                                        onChange={e => this.handleChange(row.index, e)}
                                        inputProps={{
                                            name: 'field',
                                            id: 'field',
                                        }}
                                        >
                                        <MenuItem value={10}>Não</MenuItem>
                                        <MenuItem value={20}>ANBIMA</MenuItem>
                                        <MenuItem value={30}>CVM</MenuItem>
                                        <MenuItem value={40}>CR3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete" onClick={e => this.handleRemoveRow(row.index)} className={classes.margin} >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton aria-label="add" onClick={e => this.handleAddRow()} className={classes.margin} >
                                        <AddIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <Typography color="textSecondary" align="center">
                                Vazio
                            </Typography>
                        )}
                        </TableBody>
                    </Table>

                    <div style={{ clear: 'both', marginTop: 50 }}>
                        <br/>
                        <Typography align="center" >
                            <Button variant="contained" onClick={e => { alert("Enviado com sucesso");this.props.history.push('/') } } color="primary" className={classes.button}>
                                Enviar
                            </Button>
                        </Typography>
                    </div>

                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Layout);
