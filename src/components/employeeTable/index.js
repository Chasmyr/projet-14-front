import './index.css'

const EmployeeTable = ({employees}) => {

    return (
        <table id="employee-table" className="display">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Start Date</th>
                    <th>Department</th>
                    <th>Date of Birth</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>
            </thead>
            <tbody>
                {employees !== null &&
                    employees.map((employee, index) => {
                        return (
                            <tr key={index}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.startDate}</td>
                                <td>{employee.departement}</td>
                                <td>{employee.dateOfBirth}</td>
                                <td>{employee.street}</td>
                                <td>{employee.city}</td>
                                <td>{employee.state}</td>
                                <td>{employee.zipCode}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default EmployeeTable