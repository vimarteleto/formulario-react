import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MainMenu from './MainMenu.js'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	logo: {
		width: '300px'
	},
	h1: {
		textShadow: '2px 2px 2px #061639'
	}
}));

export default function TopBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<MainMenu />
					<h1 className={classes.h1}>REGISTRO DE CLIENTES</h1>
				</Toolbar>
			</AppBar>
		</div>
	);
}
