import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard, Loader } from './'

const Videos = ({ videos, direction }) => {
  // console.log(videos)

  if(!videos?.length) return <Loader />;

  return (
    <Stack 
      direction={direction || "row"} 
      flexWrap="wrap"
      justifyContent="flex-start" 
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box 
          key={idx} 
          sx={{
            flexBasis: 'calc((95% / 3))', // Take up 1/3 of the row
            flexGrow: 1,
            flexShrink: 1,
            minWidth: '250px', // Minimum width of each item
          }}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
