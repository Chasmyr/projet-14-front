import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    form: {
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        startDate: null,
        departement: null,
        street: null,
        city: null,
        zipCode: null,
        state: null
    }
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            let formCopy = {...state.form}
            formCopy.firstName = action.payload
            return {
                ...state,
                form:
                    formCopy
            }
        },
        setLastName: (state, action) => {
            let formCopy = {...state.form}
            formCopy.lastName = action.payload
            return {
                ...state,
                form:
                    formCopy
            }
        },
        setDepartement: (state, action) => {
            let formCopy = {...state.form}
            formCopy.departement = action.payload
            return {
                ...state,
                form:
                    formCopy
            }
        },
        setStreet: (state, action) => {
            let formCopy = {...state.form}
            formCopy.street = action.payload
            return {
                ...state,
                form:
                formCopy
            }
        },
        setCity: (state, action) => {
            let formCopy = {...state.form}
            formCopy.city = action.payload
            return {
                ...state,
                form:
                    formCopy
            }
        },
        setZipCode: (state, action) => {
            let formCopy = {...state.form}
            formCopy.zipCode = action.payload
            return {
                ...state,
                form:
                    formCopy
            }
        },
        setState: (state, action) => {
            let formCopy = {...state.form}
            formCopy.state = action.payload
            return {
                ...state,
                form:
                    formCopy
            }
        },
        resetForm: (state) => {
            return {
                ...state,
                form:
                    {
                        firstName: null,
                        lastName: null,
                        dateOfBirth: null,
                        startDate: null,
                        departement: null,
                        street: null,
                        city: null,
                        zipCode: null,
                        state: null
                    }
            }
        }
    }
})

export const {actions, reducer} = formSlice

export const {setFirstName, setLastName, setDepartement, setStreet, setCity, setZipCode, setState, resetForm} = actions