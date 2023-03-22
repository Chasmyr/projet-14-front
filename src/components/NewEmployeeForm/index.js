import { Box, Button, Modal, Step, StepLabel, Stepper, Typography } from "@mui/material"
import { useState } from "react"
import { setEmployees } from "../../slices/employee/employeeSlice"
import Address from "../adress"
import PersonnalInfo from "../personalInfo"

const NewEmployeeForm = ({dispatch}) => {

    const [activeStep, setActiveStep] = useState(0)
    const [newEmployee, setNewEmployee] = useState({})
    const [openModal, setOpenModal] = useState(false)

    const steps = [
        'Employee Informations',
        'Employee Address'
    ];

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

    const nextStep = () => {
        setActiveStep(activeStep +1)
    }

    const prevStep = () => {
        setActiveStep(activeStep -1)
    }

    const handleSubmit = () => {
        dispatch(setEmployees(newEmployee))
        setOpenModal(true)
        setActiveStep(0)
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