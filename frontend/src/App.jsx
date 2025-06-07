import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LoginCard from './components/login/Login';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignUpCard from './components/signUp/SignUp';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				{/* <LoginCard /> */}
				<SignUpCard />
			</ThemeProvider>
		</>
	);
}

export default App;
