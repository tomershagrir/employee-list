import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { TextField, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';
import StatusSelect from './StatusSelect'
import { useEmployeesContext } from '../contexts/EmployeesContext';

const ModalDialog = ({ open, handleClose }) => {

	const [status, setStatus] = useState('');
	const [name, setName] = useState('');

	const employeesContext = useEmployeesContext();


	const addEmployeeClick = () => {
		employeesContext.addEmployee(name, status);
		handleClose();
	}

	return (
		<Dialog open={open} onClose={handleClose}>
			<Box>
				<Typography variant="h5" component="h3">

					<Box height={400} width={400}>

						<Box m={5}>
							New Employee
							<TextField label="Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
							<StatusSelect value={status} onChange={(status) => setStatus(status)} />

							<Button variant="contained" disabled={!name || !status}
								onClick={addEmployeeClick}
							>Add</Button>
						</Box>

					</Box>
				</Typography>
			</Box>
		</Dialog>
	);
};

export default ModalDialog;
