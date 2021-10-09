import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box, TextField } from "@mui/material";
import { useEmployeesContext } from '../contexts/EmployeesContext';
import StatusSelect from './StatusSelect'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(12, 4),
	},
	card: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: '1px solid black',
		borderRadius: '5px',
		textAlign: 'center',
	},
	icon: {
		padding: theme.spacing(2, 0),
	},
	title: {
		padding: theme.spacing(2),
	}
}));



const Employees = () => {
	const classes = useStyles();

	const [statusFilter, setStatusFilter] = useState('');
	const [nameFilter, setNameFilter] = useState('');

	const employeesContext = useEmployeesContext();

	const employees = employeesContext.employees;

	return (
		<Container component="section" maxWidth="lg" className={classes.root}>

			<Typography variant="h5" component="h3" className={classes.title}>
				Filter by:
				<Box display="flex">
					<Box>
						<TextField label="Name" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} variant="standard" />
					</Box>
					<Box width={200}>
						<StatusSelect value={statusFilter} onChange={setStatusFilter} isFilter />
					</Box>
				</Box>
			</Typography>

			<Grid container spacing={3} alignItems="stretch">
				{employees.filter(empl => (!statusFilter || empl.status === statusFilter)
					&& (!nameFilter || empl.name.toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0)
				).map(empl =>
					<Grid item xs={12} sm={4}>
						<div className={classes.card}>
							<Typography variant="h5" component="h3" className={classes.title}>
								{empl.name}
							</Typography>
							<StatusSelect value={empl.status}
								onChange={(status) => employeesContext.changeStatus(empl.id, status)
								}
							/>
						</div>
					</Grid>
				)}
			</Grid>
		</Container>
	);
};

export default Employees;
