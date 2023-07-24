import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
       <Box sx={{textAlign:'center' , bgcolor:'blueviolet', color:'white', p:3, minHeight:"10px"}}>
            
            <Box sx={{my:2, "& svg":{
              fontSize:"60px",
              cursor: "pointer",
              mr:3,
              maxHeight:'40px'
            },
            "& svg:hover":{
              color:'black',
              transform:'translateX(5px)',
              transition:'all 400ms'
            }
            }}>
            <InstagramIcon>
            <a href="https://www.instagram.com/ankitstwt/">L</a>
            </InstagramIcon>
            <TwitterIcon />
            <GitHubIcon />
            <YouTubeIcon />

            </Box>
            <Typography variant='h5'sx={{"@media (max-width:600px)":{
                fontSize:"2rem",
                fontWeight:'bold'
            }}}>
                All Right Reserved &copy; Ankit
            </Typography>
        </Box> 
    </>
  )
}

export default Footer