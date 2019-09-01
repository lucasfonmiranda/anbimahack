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
        height: 190
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
});

class History extends Component {
    
    state = {
        corretora: '',
        open: false
    }

    handleClick(name) {
        this.setState({
            corretora: name,
            open: true
        });
    }

    render() {

        let { classes } = this.props;
        let { corretora, open } = this.state;

        return (
            <div>
                <div className={classes.contentWrapper}>

                    <form
                        noValidate
                        style={{ padding: 10 }}    
                    >

                        <Card className={classes.card}>
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

                        <br/>
                        <Typography align="right" >
                            <Button variant="contained" onClick={e => this.props.history.push('/history')} color="primary" className={classes.button}>
                                Editar
                            </Button>
                        </Typography>

                        <div style={{ clear: 'both' }}>
                            <br/>
                            <Divider />
                        </div>

                        <p>Minhas conexões</p>

                        <div style={{ float: 'left' }}>
                            <img src="/rico-logo.png" alt="ricco" width="100" className={classes.img} />
                            <br/>
                            <Button color="primary"  onClick={e => this.handleClick('rico')} className={classes.button}>
                                Layouts
                            </Button>
                        </div>

                        <div style={{ float: 'left', paddingBottom: 20 }}>
                            <img src="/xo-logo.png" alt="xp" width="100" className={classes.img} />
                            <br/>
                            <Button color="primary" onClick={e => this.handleClick('XP')} className={classes.button}>
                                Layouts
                               
                            </Button>
                        </div>
                    </form>
                </div>

                <div style={{ clear: 'both', padding: 20 }}>
                    <Divider />
                </div>

                <div style={{ clear: 'both', padding: 20, display: open ? 'block' : 'none' }}>

                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
                                <b>Layout Carta do Cliente: {corretora}</b>
                            </Typography>
                            <Typography align="center" color="textSecondary" gutterBottom>
                                <small>Editado em:<br/> 01/09/2019</small>  
                            </Typography>
                            <Typography variant="body2" component="p" align="center">
                                <small>.docx</small>
                                <br/>
                                <Button variant="contained" color="primary" onClick={e => this.props.history.push('/history-thre-step')} className={classes.button}>
                                Integrar
                                </Button>            
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
                                <b>Layout Carta do Cliente: {corretora}</b>
                            </Typography>
                            <Typography align="center" color="textSecondary" gutterBottom>
                                <small>Editado em:<br/> 01/09/2019</small>  
                            </Typography>
                            <Typography variant="body2" component="p" align="center">
                                <small>.docx</small>
                                <br/>
                                <Button variant="contained" color="primary" onClick={e => this.props.history.push('/history-thre-step')} className={classes.button}>
                                Integrar
                                </Button>            
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} align="center" color="textSecondary" gutterBottom>
                                <b>Layout Carta do Cliente: {corretora}</b>
                            </Typography>
                            <Typography align="center" color="textSecondary" gutterBottom>
                                <small>Editado em:<br/> 01/09/2019</small>  
                            </Typography>
                            <Typography variant="body2" component="p" align="center">
                                <small>.docx</small>
                                <br/>
                                <Button variant="contained" color="primary" onClick={e => this.props.history.push('/history-thre-step')} className={classes.button}>
                                    Integrar
                                </Button>            
                            </Typography>
                        </CardContent>
                    </Card>

                    <div style={{ clear: 'both' }}>
                        <br />
                    </div>

                </div>
                
            </div>
        )
    }
}

export default withStyles(styles)(History);
