import { Box, Typography } from "@mui/material"
import { connect } from "react-redux"
import Header from "../../components/header"
import NewEmployeeForm from "../../components/NewEmployeeForm"

const CreateEmployee = ({dispatch}) => {

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}> 
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center', 
                        justifyContent: 'center', borderRadius: '15px', boxShadow: 3 }}>
                    <Typography variant="h2" sx={{ m: 0, textDecoration: 'underline', mt: '15px', fontSize: '24px' }}>
                        Create Employee
                    </Typography>
                    <NewEmployeeForm dispatch={dispatch} />
                </Box>
            </Box>
        </>  
    )
}

export default connect(
    state => ({

    })
)(CreateEmployee)