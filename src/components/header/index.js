import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import './index.css'

const Header = () => {

    return (
        <Box sx={{ mb: 15 }}>
            <AppBar>
                <Toolbar sx={{ display: 'flex', m: 1 }}>
                    <Typography variant="h1" sx={{ fontSize: '48px' }}>
                        HRnet
                    </Typography>
                    <Box sx={{ width: '250px', display: 'flex', justifyContent: 'space-between', ml: 8 }}>
                        <Link to="/">Home</Link>
                        <Link to="/list">Employee List</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header