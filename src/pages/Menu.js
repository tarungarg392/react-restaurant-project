import React from 'react'

import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { MenuList } from '../Data/data'

function Menu() {
  return (
    <Layout>
       <Box sx={{display:'flex', flexWrap:'wrap',justifyContent:'center' }}>
        {MenuList.map(menu => (
                <Card sx={{width:'390px'}}>
                    <CardActionArea>
                        <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name} />
                    </CardActionArea>
                    <CardContent >
                        <Typography variant='h5' gutterBottom component='div'>
                            {menu.name}
                        </Typography>
                        <Typography variant='body2'>
                            {menu.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))
        }
       </Box>
    </Layout>
  )
}

export default Menu
