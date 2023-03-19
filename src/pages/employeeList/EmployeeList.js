import { Box, Typography } from "@mui/material"
import { connect } from "react-redux"
import EmployeeTable from "../../components/employeeTable"
import Header from "../../components/header"

const EmployeeList = ({employees = null}) => {


    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
                <Box sx={{ width: '95%', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '15px', boxShadow: 3 }}>
                    <Typography variant="h2" sx={{ m:0, mt: '15px', fontSize: '24px', mb: '15px', textDecoration: 'underline' }}>
                        Current Employees
                    </Typography>
                    <EmployeeTable employees={employees} />
                </Box>
            </Box>
        </>
    )
}

export default connect(
    state => ({
        employees: state.employeeReducer.employees
    })
)(EmployeeList)