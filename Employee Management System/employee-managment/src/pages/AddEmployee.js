import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
  const navigate = useNavigate();

  const handleAdd = () => {
    const newEmployee = { id: Date.now(), name, role, age, salary };
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));
    navigate('/employees');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label>Salary:</label>
          <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>
        <button type="button" onClick={handleAdd}>Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
