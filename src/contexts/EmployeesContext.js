import React, { useContext, useState, useEffect, createContext } from 'react';

import axios from 'axios';

const config = require('../config.env');

const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {
	const [employees, seEmployees] = useState([]);

	useEffect(() => {
		axios.get(config.baseUrl)
			.then(res => {
				const employeesData = res.data;
				seEmployees(employeesData);
			})
	}, []);

	const value = {
		employees,
		changeStatus: (employeeId, status) => {
			axios.post(config.baseUrl + employeeId, {status}).then(res => {
				const employeesData = res.data;
				seEmployees(employeesData);
			})
		},
		addEmployee: (name, status) => {
			axios.post(config.baseUrl, {name ,status}).then(res => {
				const employeesData = res.data;
				seEmployees(employeesData);
			})
		}
	};


	return (
		<EmployeesContext.Provider value={value}>
			{children}
		</EmployeesContext.Provider>
	);
};

export const useEmployeesContext = () => {
	return useContext(EmployeesContext);
};
