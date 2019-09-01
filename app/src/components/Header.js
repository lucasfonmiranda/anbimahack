import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

const solicitacoes = [
	{ id: 0, nome: 'Ricco' },
	{ id: 1, nome: 'Daycoval' }
]

function Header(props) {

	const { classes, onDrawerToggle } = props;
	const [openModal, setOpen] = React.useState(false);

	function handleClose() {
		setOpen(false);
	}

	function handleClickOpen() {
		setOpen(true);
	}

	function handleListItemClick(value, id = 0) {
		
		solicitacoes.splice(id, 1);

		if(value == 'add') {
			alert("Adicionado com sucesso!");
			setOpen(false);
			return;
		}

		setOpen(false);
	}

	return (
		<React.Fragment>
		<AppBar color="primary" position="sticky" elevation={0}>
			<Toolbar>
			<Grid container spacing={1} alignItems="center">
				<Hidden smUp>
				<Grid item>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={onDrawerToggle}
						className={classes.menuButton}
					>
					<MenuIcon />
					</IconButton>
				</Grid>
				</Hidden>
				<Grid item xs />
				<Grid item>

				<Tooltip title="Alerts">
					<IconButton color="inherit" onClick={handleClickOpen}>
					<Badge className={classes.margin} badgeContent={solicitacoes.length} color="secondary">
						<NotificationsIcon />
					</Badge>
					</IconButton>
				</Tooltip>
				</Grid>
				
				<Grid item>
				<Tooltip title="Help">
					<IconButton color="inherit">
					<HelpIcon />
					</IconButton>
				</Tooltip>
				</Grid>
			</Grid>
			</Toolbar>
		</AppBar>
		
		<AppBar
			component="div"
			className={classes.secondaryBar}
			color="primary"
			position="static"
			elevation={0}
		>
			<Tabs textColor="inherit">
			<Tab textColor="inherit" label="Conexões" onClick={e => props.history.push('/connections')} />
			<Tab textColor="inherit" label="Meus Layouts" onClick={e => props.history.push('/layouts')}/>
			<Tab textColor="inherit" label="Integrações" onClick={e => props.history.push('/history')}/>
			<Tab textColor="inherit" label="Dashboard" onClick={e => props.history.push('/dashboard')}/>
			<Tab textColor="inherit" label="Upload" onClick={e => props.history.push('/upload')}/>
			</Tabs>
		</AppBar>

		<Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={openModal}>
			<DialogTitle id="simple-dialog-title">Solicitações de Conexões</DialogTitle>
			<List>
				{ solicitacoes.map(solicitacao => (
					<ListItem button key={1}>
						<ListItemText style={{ padding: 10, marginRight: 10 }} primary={solicitacao.nome} />
						<ListItemSecondaryAction>
							<IconButton edge="end" color="primary" aria-label="add" onClick={() => handleListItemClick('add', solicitacao.id)}>
								<AddIcon />
							</IconButton>
							<IconButton edge="end" color="secondary" aria-label="delete" onClick={() => handleListItemClick('remove', solicitacao.id)}>
								<CloseIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</Dialog>

		</React.Fragment>
	);
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);