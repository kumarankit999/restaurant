import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CallIcon from '@mui/icons-material/Call';


const Contact = () => {
  return (
    <Layout>
        <Box sx={{
          my:5,
          ml:10,
          "& h4":{fontWeight:'bold',mb: 2}
        }}>
          <Typography variant='h4'>
            Contact My Restaurant
          </Typography>
          <p>
          Thank you for your interest in reaching out to us! We are thrilled to assist you with any inquiries or reservations you may have.
          </p>
        </Box>
        <Box sx={{m:8, width:"600px", ml:10, 
          "@media(max-width:600px)":{
            width:'300px',
            height:'200px',
            justifyContent:'center'
          }
      }}>
          <TableContainer component={Paper}>
              <Table aria-label="contact table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{bgcolor:'black',color:'white',}} align='center'>Contact Details</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                      <SupportAgentIcon sx={{color:'blue',pt:1}}/> 1800-8511-9975 (Toll-Free)
                      </TableCell>
                      
                    </TableRow>
                    <TableRow>
                    <TableCell>
        < MarkunreadIcon sx={{color:'red',pt:1}}/> ankitbhaikumar454@gmail.com
                      </TableCell>
                    </TableRow>

                    <TableRow>
                    <TableCell>
        < CallIcon sx={{color:'green',pt:1}}/> 9123456789
                      </TableCell>
                    </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact