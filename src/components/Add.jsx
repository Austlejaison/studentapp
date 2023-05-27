import { TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{textAlign:'center'}}>
       <h1>Blog Name: <TextField placholder="Enter Blogname"></TextField></h1>
       <h1>Description: <TextField placholder="Enter Description"></TextField></h1>
       <h1>Author Name: <TextField placholder="Enter Author name"></TextField></h1>
    </div>
  )
}

export default Add