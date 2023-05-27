import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <Typography  variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Blog Dashboard
            </Typography>

            <Button color="blue"><Link to={'/'}>Home</Link></Button>
            <Button color="blue"><Link to={'/add'}>Add Blog</Link></Button>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Nav