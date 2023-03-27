import {Alert, Box, Button, Modal, Step, StepLabel, Stepper, Typography} from "@mui/material"
import { useState } from "react"
import { setEmployees } from "../../slices/employee/employeeSlice"
import Address from "../adress"
import PersonnalInfo from "../personalInfo"

const NewEmployeeForm = ({dispatch}) => {

    const [activeStep, setActiveStep] = useState(0)
    const [newEmployee, setNewEmployee] = useState({})
    const [openModal, setOpenModal] = useState(false)
    const [formError, setFormError] = useState([])

    const steps = [
        'Employee Informations',
        'Employee Address'
    ]

    const toCheck = ['addressStreet', 'city', 'dateOfBirth', 'zipCode', 'departement', 'firstName', 'lastName', 'startDate']

    const handleSubmit = () => {
        if(newEmployee.addressStreet && newEmployee.city && newEmployee.dateOfBirth && newEmployee.zipCode &&
            newEmployee.departement && newEmployee.firstName && newEmployee.lastName && newEmployee.startDate) {
            setFormError([])
            dispatch(setEmployees(newEmployee))
            setOpenModal(true)
            setNewEmployee({})
            setActiveStep(0)
        } else {
            let errorCount = []
            toCheck.map((checker) => {
                if(!newEmployee[checker]) {
                    errorCount.push(checker)
                }
            })
            setFormError(errorCount)
        }
    }

    const nextStep = () => {
        setActiveStep(activeStep +1)
    }

    const prevStep = () => {
        setActiveStep(activeStep -1)
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <PersonnalInfo newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            case 1:
                return <Address newEmployee={newEmployee} setNewEmployee={setNewEmployee} />
            default:
                throw new Error('Unknow step')
        }
    }

    return (
        <>  
            <Modal
                open={openModal}
                onClose={() => {setOpenModal(false)}}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >   
                <Box sx={{ backgroundColor: 'white', width: '250px', height: '120px', borderRadius: '10px', boxShadow: 3,
                    display:'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6">
                        Employee Created !
                    </Typography>
                </Box>
            </Modal>
            <Box>
                <Stepper sx={{ mt: 3, mb: 3, ml: 4, mr: 4 }} activeStep={activeStep}>
                    {steps.map((label) => {
                        return(
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
                {formError.length > 0 &&
                    <Alert severity="error" sx={{m: 1, mb: 2}} onClose={() => {setFormError([])}}>
                        Some required fields are not filled : {formError.map((e) => <strong key={e}>{e} </strong>)}!
                    </Alert>}
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 4, mb: 2 }}>
                    {activeStep !== 0 ?
                        <>
                            <Button variant="contained" onClick={prevStep} color="inherit" sx={{ mr: 3 }}>
                                Back
                            </Button>
                            <Button variant="contained" onClick={handleSubmit}>
                                Save
                            </Button>
                        </>
                    :
                        <Button variant="contained" onClick={nextStep}>
                            Next
                        </Button>
                    }
                </Box>
            </Box>
        </>
    )
}

export default NewEmployeeForm