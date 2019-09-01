import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
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

class Layout extends Component {

    state = {
        rows: []
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

    createData(name, type, len, required, defaul, field) {
        return { name, type, len, required, defaul, field };
    }

    handleChange(index, e) {
        
    }

    render() {

        let { classes } = this.props;
        let { rows } = this.state;

        return(
            <div style={{ display: 'inline' }}>
                <Card className={classes.card} onClick={e => this.props.history.push('/layoutAdd')}>
                    <CardContent>
                        <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
                            <b>Novo Layout de Integração</b>
                        </Typography>
                        <br/>
                        <Typography variant="body2" component="p" align="center">
                            <IconButton colorInherit aria-label="delete" className={classes.margin}>
                                <AddIcon fontSize="large" />
                            </IconButton>                
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card} onClick={e => this.props.history.push('/layoutClientLetter')}>
                    <CardContent>
                        <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
                            <b>Layout Carta do Cliente</b>
                        </Typography>
                        <Typography align="center" color="textSecondary" gutterBottom>
                            <small>Editado em:<br/> 01/09/2019</small>  
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            <IconButton colorInherit aria-label="delete" className={classes.margin}>
                                <EditIcon fontSize="large" />
                            </IconButton>                
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card} onClick={e => this.props.history.push('/layoutAdmLetter')}>
                    <CardContent>
                        <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
                            <b>Layout Carta para Administrador</b>
                        </Typography>
                        <Typography align="center" color="textSecondary" gutterBottom>
                            <small>Editado em: 01/09/2019</small>  
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            <IconButton colorInherit aria-label="delete" className={classes.margin}>
                                <EditIcon fontSize="large" />
                            </IconButton>                
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card} onClick={e => this.props.history.push('/layoutPositionReconciliation')}>
                    <CardContent>
                        <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
                            <b>Conciliação de Posição</b>
                        </Typography>
                        <Typography align="center" color="textSecondary" gutterBottom>
                            <small>Editado em:<br/> 01/09/2019</small>  
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            <IconButton colorInherit aria-label="delete" className={classes.margin}>
                                <EditIcon fontSize="large" />
                            </IconButton>                
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Layout);
