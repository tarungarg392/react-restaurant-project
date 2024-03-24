import React,{useState} from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from 'react-router-dom'
import "../../styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
   
  }
  //menu drawer
  const drawer = (
    
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
         <Typography color={"goldenrod"} variant='h6' component='div' sx={{flexGrow:1}}>
            <FastfoodIcon />
            My restaurant
          </Typography>

            <ul className='navigation-menu' sx={{color:'black'}}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/menu'>Menu</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
         
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}>
          <Toolbar>
            <IconButton color='inherit' onClick={handleDrawerToggle} aria-label='open drawer' edge='start' sx={{mr:2,display:{sm:"none"}}}> 
              <MenuIcon />
            </IconButton>
          <Typography color={"goldenrod"} variant='h6' component='div' sx={{flexGrow:1}}>
            <FastfoodIcon />
            My restaurant
          </Typography>
          <Box sx={{display:{xs:'none',sm:'block'}}}>
            <ul className='navigation-menu'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/menu'>Menu</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{
              "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  
                  width: "240px",
              },
            }}>
              {drawer}
            </Drawer>
        </Box>
      </Box>
    </>
  )
}

export default Header

