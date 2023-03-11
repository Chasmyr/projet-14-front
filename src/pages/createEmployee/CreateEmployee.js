import { connect } from "react-redux"
import Header from "../../components/header"
import NewEmployeeForm from "../../components/NewEmployeeForm"
import './index.css'

const CreateEmployee = ({dispatch}) => {

    return (
        <>
            <Header />
            <div className="content-wrapper">
                <div className="container">
                    <h2 className="form-title">Create Employee</h2>
                    <NewEmployeeForm dispatch={dispatch} />
                </div>
                <div className="modal" id="confirmation">Employee Created!</div>
            </div>
        </>  
    )
}

export default connect(
    state => ({

    })
)(CreateEmployee)