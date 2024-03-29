import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard, Loader } from './'

const Videos = ({ videos, direction }) => {
  // console.log(videos)

  var vv = videos;
  // console.log(vv); 

  if(!videos?.length) return <Loader />;

  return (
    <Stack direction={ direction || "row" } flexWrap="wrap"
      justifyContent="flex-start" gap={2}>

      {vv.map((item, idx) => (
        <Box key={idx}>
          {/* {console.log(item.snippet)} */}
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}

    </Stack> 
  )
}

export default Videos