import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import { FetchApi } from './utils/fetchApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  
  let { searchterm } = useParams();

  console.log(searchterm, videos);

  useEffect(() => {
    FetchApi(`search?part=snippet&q=${searchterm}`)
    .then((data) => setvideos(data.items))
  }, [])

  return (
    <Box className='p-4 h-[90vh] min-w-[70vw] overflow-auto' >
      <Typography variant="h4" fontWeight="bold" mb={2} ml={{ sm: "100px"}} >
        Search Results for: <span className='text-customRed'> {searchterm} </span>
      </Typography>

      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed;