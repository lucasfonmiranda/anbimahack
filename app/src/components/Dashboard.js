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
        width: 200,
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
    
    render() {

        let { classes } = this.props;
       

        return (
            <div style={{ padding: 10 }}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography align="center" color="textSecondary" gutterBottom>
                            Você já fez
                        </Typography>
                        <Typography align="center" color="textSecondary" variant="h4" gutterBottom>
                            593
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            Integrações          
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography align="center" color="textSecondary" gutterBottom>
                            Você Tem
                        </Typography>
                        <Typography align="center" color="textSecondary" variant="h4" gutterBottom>
                            315
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            Layouts          
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography  align="center" color="textSecondary" gutterBottom>
                            Você já fez
                        </Typography>
                        <Typography align="center" color="textSecondary" variant="h4" gutterBottom>
                            1582
                        </Typography>
                        <Typography variant="body2" component="p" align="center">
                            Conexões          
                        </Typography>
                    </CardContent>
                </Card>

                <div style={{ clear: 'both', paddingTop: 30 }}>
                    <Card style={{ width: '100%', }}>
                        <CardContent>
                            <Typography variant="body2" component="p" align="left">
                                Integrações no périodo          
                            </Typography>
                            <br/>
                            <div style={{ clear: 'both', textAlign: 'center' }}>

                                <img src="/chart.png" width="65%" />    

                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(History);
