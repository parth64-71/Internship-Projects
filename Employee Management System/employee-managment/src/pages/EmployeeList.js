import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/add-employee">Add New Employee</Link>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
           Name:- {employee.name} &emsp; Role:- {employee.role}&emsp;Age:- {employee.age} &emsp;  Salary:- {employee.salary}
            <Link to={`/edit-employee/${employee.id}`} style={{ marginLeft: '10px' }}>Edit</Link>
            <button onClick={() => deleteEmployee(employee.id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
