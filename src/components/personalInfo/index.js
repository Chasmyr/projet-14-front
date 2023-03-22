import { Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from "react"

const PersonnalInfo = ({newEmployee, setNewEmployee}) => {

    const [departement, setDepartement] = useState('Sales')

    const selectData = [
        {
            "name": "Sales",
            "value": "Sales"
        },
        {
            "name": "Marketing",
            "value": "Marketing"
        },
        {
            "name": "Engineering",
            "value": "Engineering"
        },
        {
            "name": "Human Resources",
            "value": "HR"
        },
        {
            "name": "Legal",
            "value": "Legal"
        }
    ]

    const handleSelectChange = (e) => {
        setDepartement(e.target.value)
        let cloneEmployee = newEmployee
        cloneEmployee['departement'] = e.target.value
        setNewEmployee(cloneEmployee)
    }

    const handleInputChange = (e) => {
        let cloneEmployee = newEmployee
        cloneEmployee[e.target.id] = e.target.value
        setNewEmployee(cloneEmployee)
    }

    const handleDateOfBirth = (e) => {
        let cloneEmployee = newEmployee
        if(e.$D < 10) {
            cloneEmployee['dateOfBirth'] = '0' + e.$D + '/' + (e.$M +1) + '/' + e.$y
        } else {
            cloneEmployee['dateOfBirth'] = e.$D + '/' + (e.$M +1) + '/' + e.$y
        }
        setNewEmployee(cloneEmployee)
    }

    const handleStartDate = (e) => {
        let cloneEmployee = newEmployee
        if(e.$D < 10) {
            cloneEmployee['startDate'] = '0' + e.$D + '/' + (e.$M +1) + '/' + e.$y
        } else {
            cloneEmployee['startDate'] = e.$D + '/' + (e.$M +1) + '/' + e.$y
        }
        setNewEmployee(cloneEmployee)
    }

    return (
        <>
            <Typography variant="h6" gutterBottom sx={{ pl: 4 }}>
                Employee Informations
            </Typography>
            <Grid container spacing={3} sx={{ p: 4, pt: 2, pb: 3 }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label="Date Of Birth"
                            format="DD/MM/YYYY"
                            sx={{ width: '100%' }}
                            onChange={handleDateOfBirth}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label="Start Date"
                            format="DD/MM/YYYY"
                            sx={{ width: '100%' }}
                            onChange={handleStartDate}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <InputLabel id="select-departement">Departement</InputLabel>
                    <Select
                        labelId="select-departement"
                        value={departement}
                        onChange={handleSelectChange}
                        fullWidth
                    >
                    {selectData.map((e, index) => {
                        return (
                            <MenuItem value={e.value} key={index}>{e.name}</MenuItem>
                        )
                    })}
                    </Select>
                </Grid>
            </Grid>
        </>
    )
}

export default PersonnalInfo