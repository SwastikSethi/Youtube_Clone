import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from './utils/constants'
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <Stack 
      alignItems ="center" 
      direction ="row" 
      p={2} 
      sx={{ position: 'sticky', background: '#000', top: 0,
             justifyContent: 'space-between' }} >
            {/* className = "sticky top-0  bg-black flex justify-between flex-col"  */}
      <Link to="/" className='flex items-center' >

        <img src={logo} alt="logo" className='h-10 '  height={45}/>

      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar