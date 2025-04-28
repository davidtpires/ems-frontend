import React from "react";

function ListEmployeeComponent() {
  const dummyData = [
    {
      id: 1,
      firstName: "Ramesh",
      lastName: "Fadatare",
      email: "ramesh@gmail.com",
    },
    {
      id: 2,
      firstName: "Umesh",
      lastName: "Fadatare",
      email: "umesh@gmail.com",
    },
    {
      id: 3,
      firstName: "Rajkumar",
      lastName: "Fadatare",
      email: "rajkumar@gmail.com",
    },
  ];

  return (
    <div>
      <h2>List of Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
            {
                dummyData.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )
            }

        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeeComponent;
