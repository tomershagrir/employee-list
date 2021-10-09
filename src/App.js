import Navbar from './components/Navbar';
import Employees from './components/Employees';
import { MuiThemeProvider as ThemeProvider } from './styles/theme';
import { EmployeesProvider } from './contexts/EmployeesContext';

const App = () => {
	return (
		<ThemeProvider>
			<EmployeesProvider>
				<Navbar />
				
				<Employees />
			</EmployeesProvider>
		</ThemeProvider>
	);
};

export default App;
