import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'



function About() {
  return (
    <Layout>
      <Box
        sx={{
          my:15,
          textAlign:'center',
          "& h4":{
           
            fontWeight:'bold',
          },
          "& p":{
            textAlign:'center',
            fontSize:'14px',
          },
          "@media (max-width:600px)":{
            "& h4":{
              color:'red',
            }
          }

        }}  
      >
      <Typography variant='h4'>About page content</Typography>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Box>
    </Layout>
  )
}

export default About
