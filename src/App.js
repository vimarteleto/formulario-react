import './App.css';
import TopBar from './ui/TopBar.js'
import FooterBar from './ui/FooterBar.js'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import blue from '@material-ui/core/colors/blue'
import yellow from '@material-ui/core/colors/yellow'
import ClienteList from './routed/ClienteList.js'
import ClienteForm from './routed/ClienteForm.js'

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: blue[500],
		},
		secondary: {
			main: yellow[500],
		},
	},
});

const useStyles = makeStyles((theme) => ({
	box: {
		backgroundColor: theme.palette.background.default,
		minHeight: '100vh',
		paddingBottom: '42px'
	},
	routed: {
		padding: '24px',
		color: theme.palette.text.primary,
		fontFamily: theme.typography.fontFamily
	}
}));

function Main() {
	const classes = useStyles()
	return (
		<Box className={classes.box}>
			<BrowserRouter>
				<TopBar />
				<Box id="routed" className={classes.routed}>
					<Switch>
						<Route path="/list">
							<ClienteList />
						</Route>
						<Route path="/new">
							<ClienteForm />
						</Route>
					</Switch>
				</Box>
				<FooterBar />				
			</BrowserRouter>
		</Box>
	)
}

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Main />
		</ThemeProvider>
		
	);
}

export default App;