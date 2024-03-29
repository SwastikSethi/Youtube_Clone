import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from './utils/constants'

// const VideoCard = ({ videoId, snippet }) => {
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // console.log(videoId, snippet);
  return (
    <Card sx={{  width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 3 }} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: {
            xs: '100%',sm: '358px', md:'320px'
          }, height: 180 }} />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', minHeight : '130px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subitle1' fontWeight="bold" color='#FFF' >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <br></br>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subitle2' fontWeight="bold" color='gray' >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: 1 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard