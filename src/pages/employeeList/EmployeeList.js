import { connect } from "react-redux"
import EmployeeTable from "../../components/employeeTable"
import Header from "../../components/header"
import './index.css'

const EmployeeList = ({employees = null}) => {


    return (
        <>
            <Header />
            <div id="employee-div" className="container-table">
                <div className="content-table">
                    <h1 className="table-title">Current Employees</h1>
                    <EmployeeTable employees={employees} />
                </div>
            </div>
        </>
    )
}

export default connect(
    state => ({
        employees: state.employeeReducer.employees
    })
)(EmployeeList)