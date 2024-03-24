import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


function Contact() {
  return (
    <Layout>
      <Box sx={{
        my:15,
        ml:10,
        "& h4":{
          fontWeight:'bold',
          mb:2,
        },
        "& p":{
          fontSize:"14px",

        }
        }}>
        <Typography variant='h4'>Contact us</Typography>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      </Box>
      <Box sx={{
        m:3,
        width:"600px",
        "@media (max-width:600px)":{
          width:'80%',
        }
        }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white',textAlign:'center'}}>
                    Contact details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon  sx={{color:'red',pt:1}}/> 122323423
                  (tollfree)
                </TableCell>
               </TableRow>
               <TableRow>
                <TableCell>
                  <EmailIcon  sx={{color:'red',pt:1}}/> abc@123.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon  sx={{color:'red',pt:1}}/> 1800-2000-1
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
