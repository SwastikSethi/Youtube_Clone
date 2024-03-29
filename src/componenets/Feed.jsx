import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos } from '../componenets'
import { FetchApi } from './utils/fetchApi'

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    // setvideos(null);

    FetchApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setvideos(data.items))
  }, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: "row" } }}>
      <Box sx={{
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }
      }}>
        <SideBar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />

      </Box>


      <Box className='p-4 h-[90vh] min-w-[70vw] overflow-auto' >
        <Typography  variant="h4" fontWeight="bold" mb={2} >
          {selectedCategory}
          <span className='text-customRed' > Videos</span>
        </Typography>

        {/* {console.log(videos)} */}

        <Videos videos={videos} />

      </Box>
    </Stack>
  )
}

export default Feed