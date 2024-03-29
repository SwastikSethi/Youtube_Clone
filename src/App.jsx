import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Box } from '@mui/material'
import {NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './componenets'

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{backgroundColor: '#000', color:'white', width: '100vw', margin:'0px' }}>
          <NavBar  />
          <Routes>
            <Route path ="/" exact element = {<Feed/>} />
            <Route path = "/video/:id" element = {<VideoDetail/>} />
            <Route path = "/Channel/:id" element = {<ChannelDetail/>} />
            <Route path='/search/:searchterm' element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default App