import { connect } from "react-redux"
import { Link } from "react-router-dom"
import NewEmployeeForm from "../../components/NewEmployeeForm"

const CreateEmployee = ({dispatch}) => {

    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <NewEmployeeForm dispatch={dispatch} />
            </div>
            <div className="modal" id="confirmation">Employee Created!</div>
        </div>
    )
}

export default connect(
    state => ({

    })
)(CreateEmployee)