import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ name: '', role: '' , age: '', salary: '' });

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeeToEdit = employees.find((emp) => emp.id === parseInt(id));
    if (employeeToEdit) {
      setEmployee(employeeToEdit);
    }
  }, [id]);

  const handleEdit = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const updatedEmployees = employees.map((emp) =>
      emp.id === parseInt(id) ? employee : emp
    );
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    navigate('/employees');
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={employee.role}
            onChange={(e) => setEmployee({ ...employee, role: e.target.value })}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            value={employee.age}
            onChange={(e) => setEmployee({ ...employee, age: e.target.value })}
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="text"
            value={employee.salary}
            onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
          />
        </div>
        <button type="button" onClick={handleEdit}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditEmployee;
