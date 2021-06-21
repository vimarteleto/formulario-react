import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
    menuLink: {
        color: theme.palette.text.primary,
        textDecoration: 'none'
    },
    ul: {
        marginTop: '500px'
    }
}));

export default function MainMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu" 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem
                onClick={handleClose}>
                <Link className={classes.menuLink} to="/">Home</Link>
            </MenuItem>
            <MenuItem
                onClick={handleClose}>
                <Link className={classes.menuLink} to="/list">Listagem de clientes</Link>
            </MenuItem>
            <MenuItem                 
                onClick={handleClose}>
                    <Link className={classes.menuLink} to="/new">Cadastrar novo cliente</Link>
            </MenuItem>
        </Menu>
        </>
    );
}
