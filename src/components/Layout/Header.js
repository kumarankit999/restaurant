import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, drawerClasses } from '@mui/material'
import '../../styles/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/logo.svg'


const Header = () => {
  const [mobileOpen, setMobileOpen]=useState(false)
  
  //handle menu drawer
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer=(
      <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
        <Typography 
        color={'black'} 
        variant="h6" 
        component="div" 
        sx={{flexGrow:1, my:2}}>
          {/* <FastfoodIcon/>  My Restaurant */}
          <img src={Logo} alt="logo" height={'60'}  width="200"/>
          </Typography>
          <Divider/>

          <ul className='mobile-navigation'>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>

        </Box>
  )
   return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:"blueviolet"}}>
        <Toolbar>
          <IconButton color='inherit' area-label="open drawer" edge="start" sx={{mr:2,display:{sm:"none"},}}
          onClick={handleDrawerToggle}
          >
          
          <MenuIcon/>
          </IconButton>
        <Typography 
        color={'White'} 
        variant="h5"
        fontWeight='bolder'
        component="div" 
        sx={{flexGrow:1}}>
          <FastfoodIcon/> Wave Restaurant</Typography>
        <Box sx={{display:{xs:'none',sm:"block"}}}>
          <ul className='navigation-menu'>
            <li>
              <NavLink activeClassName="active" to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>

        </Box>
        
        </Toolbar>
      </AppBar>
      <Box component="nav">
            <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'}, "& .MuiDrawer-paper":{
              boxSizing:'border-box',
              width:"240px",
            }}}>
              {drawer}
            </Drawer>
      </Box>
          <Box >

      <Toolbar/>
          </Box>
    </Box>
    </>
  )
}

export default Header