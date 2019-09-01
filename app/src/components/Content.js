import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Connections from './Connections';
import Layout from './Layouts';
import History from './History';
import LayoutHome from './LayoutHome';
import LayoutAdd from './LayoutAdd';
import LayoutClientLetter from './LayoutClientLetter';
import LayoutClientAdm from './LayoutClientAdm';
import LayoutPositionReconciliation from './LayoutPositionReconciliation';
import HistoryStep2 from './HistoryStep2';
import HistoryStep3 from './HistoryStep3';
import Dashboard from './Dashboard';
import Upload from './Upload';

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
});

function Content(props) {

  const { classes } = props;

  switch (props.param) {

    case 'connections':
		return (
			<Paper className={classes.paper}>
				<Connections />
			</Paper>
		);

    case 'layouts':
		return (
			<LayoutHome history={props.history} />
		);

    case 'layoutAdd':
		return(
			<Paper className={classes.paper}>
				<LayoutAdd history={props.history} />
			</Paper>
		);

	case 'layoutClientLetter':
		return (
			<Paper className={classes.paper}>
				<LayoutClientLetter history={props.history} />
			</Paper>
		);

	case 'layoutAdmLetter':
		return (
			<Paper className={classes.paper}>
				<LayoutClientAdm  history={props.history}/>
			</Paper>

		);

	case 'layoutPositionReconciliation':
		return (
			<Paper className={classes.paper}>
				<LayoutPositionReconciliation  history={props.history} />
			</Paper>
		);

	case 'history-two-step':
		return (
			<Paper className={classes.paper} >
				<HistoryStep2 history={props.history} />
			</Paper>
		);

	case 'history-thre-step':
		return (
			<Paper className={classes.paper}>
				<HistoryStep3  history={props.history} />
			</Paper>
		);

    case 'layoutForm':
      	return(
        	<Paper className={classes.paper}>
        		<Layout  history={props.history} />
        	</Paper>
      	);

    case 'history':
      return (
        <Paper className={classes.paper}>
        	<History  history={props.history}/>
        </Paper>
	);
	
	case 'dashboard':
		return (
			<Dashboard />
		);

	case 'upload':
		return (
			<Paper className={classes.paper}>
				<Upload history={props.history}/>
			</Paper>
		);
  
    default:
       	return (
        	<Paper className={classes.paper}>
          
        	</Paper>
      	);
  	}
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);