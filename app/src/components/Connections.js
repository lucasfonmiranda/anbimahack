import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    paper: {
      maxWidth: 1000,
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
});

class Connections extends Component {

    state = {
        players: [
            {
                cnpj: "12345678",
                nome: "XP Investimentos",
                gestor: 'Lucas Menezes'
            },
            {
                cnpj: "98765432",
                nome: "Ricco",
                gestor: 'João Pedro'
            },
            {
                cnpj: "12345678",
                nome: 'Itaú',
                gestor: "Paulo Andrade"
            }
        ],
        filterPlayes: [],
        buttonTex: 'Conectar',
        color: 'primary'
    }

    handleSearch(e) {

        let { filterPlayes, players } = this.state;
        let word = e.target.value;
        
        if(word) {
            let newPlayers = players.filter(player => {

                if(player.cnpj.search(word) !== -1 || player.nome.search(word) !== -1 || player.gestor.search(word) !== -1) {
                    return true;
                }
    
            });
    
            this.setState({
                filterPlayes: newPlayers
            });

            return;
        }

        this.setState({
            filterPlayes: []
        });
    }

    handleClick(action = 'connect') {
        
        if(action !== 'connect') {
            this.setState({
                color: 'primary',
                buttonTex: 'Conectar'
            });
            return;
        }

        this.setState({
            color: 'secondary',
            buttonTex: 'Cancelar Solicitação'
        });
    }

    render() {

        let { classes } = this.props;
        let { filterPlayes } = this.state;

        return(
            <div>
                <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                            <SearchIcon className={classes.block} color="inherit" />
                            </Grid>
                            <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Procure por: Nome do fundo, CNPJ ou Gestor de fundos"
                                name="search"
                                onChange={e => this.handleSearch(e)}
                                InputProps={{
                                    disableUnderline: true,
                                    className: classes.searchInput,
                                }}
                            />
                            </Grid>
                            <Grid item>
                            
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div className={classes.contentWrapper}>
                    {
                        filterPlayes.length > 0 ? (
                            <div>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Nome do Fundo</TableCell>
                                            <TableCell align="center">CNPJ</TableCell>
                                            <TableCell align="center">Gestor</TableCell>
                                            <TableCell align="center">##</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    { filterPlayes.map(row => (
                                        <TableRow key={row.nome}>
                                            <TableCell component="th" scope="row">
                                               {row.nome}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.cnpj}
                                            </TableCell>
                                            <TableCell align="center">
                                               {row.gestor}
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button aria-label="delete" color={this.state.color} onClick={ this.state.color == 'primary' ? e => this.handleClick() : e => this.handleClick('disconnect') } className={classes.margin} >
                                                    {this.state.buttonTex}
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </div>
                        ): (
                            <Typography color="textSecondary" align="center">
                                Nenhum Resultado
                            </Typography>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Connections);
