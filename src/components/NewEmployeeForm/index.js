import { useRef } from "react"
import { states } from "../../data/states"
import { setEmployees } from "../../slices/employee/employeeSlice"
import './index.css'

const NewEmployeeForm = ({dispatch}) => {

    const employeeFirstName = useRef(null)
    const employeeLastName = useRef(null)
    const employeeDateOfBirth = useRef(null)
    const employeeStartDate = useRef(null)
    const employeeStreet = useRef(null)
    const employeeCity = useRef(null)
    const employeeState = useRef(null)
    const employeeZipCode = useRef(null)
    const employeeDepartement = useRef(null)

    const saveForm = () => {
        let employeeForm = {
            firstName: employeeFirstName.current.value,
            lastName: employeeLastName.current.value,
            dateOfBirth: employeeDateOfBirth.current.value,
            startDate: employeeStartDate.current.value,
            departement: employeeDepartement.current.value,
            street: employeeStreet.current.value,
            city: employeeCity.current.value,
            state: employeeState.current.value,
            zipCode: employeeZipCode.current.value
        }

        dispatch(setEmployees(employeeForm))
    }


    return (
        <>
            <form id="create-employee" className="form">

                <div className="col-1">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" ref={employeeFirstName} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" ref={employeeLastName} />

                    <label htmlFor="date-of-birth">Date Of Birth</label>
                    <input type="date" id="date-of-birth" ref={employeeDateOfBirth} />

                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id="start-date" ref={employeeStartDate} />

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department" ref={employeeDepartement} >
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </div>

                <fieldset className="address">

                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" ref={employeeStreet} />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" ref={employeeCity} />
                    
                    <label htmlFor="state">State</label>
                    <select name="state" id="state" ref={employeeState}>
                        {states.map((state, index) => {
                            return (
                                <option key={index} value={state.abbreviation}>{state.name}</option>
                            )
                        })}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="number" id="zip-code" ref={employeeZipCode} />

                </fieldset>

            </form>

            <button onClick={saveForm} className="save-btn">Save</button>
        
        </>
    )
}

export default NewEmployeeForm