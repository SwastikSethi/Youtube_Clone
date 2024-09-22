import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from './utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 3 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', minHeight: '100px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color='#FFF'>
            {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}
          </Typography>
        </Link>
        <br />
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight="bold" color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: 1 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
