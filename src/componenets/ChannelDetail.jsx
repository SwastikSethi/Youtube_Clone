import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { Videos, ChannelCard, Loader } from "./"
import { FetchApi } from "./utils/fetchApi"

const channelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [banner, setbanner] = useState("");

  // if(!channelDetail) return <Loader />;

  // console.log(channelDetail, videos, banner)

  const { id } = useParams();
  useEffect(() => {
    FetchApi(`channels?part=snippet%2Cstatistics&id=${id}`)
      .then((data) => {
        setChannelDetail(data?.items[0])
        setbanner(data?.items[0].brandingSettings.image.bannerExternalUrl)
      });
    FetchApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));

  }, [id])


  return (
    <Box minHeight="95vh">
      <Box>
        <img src={banner} alt="banner" className="z-10 h-[300px] w-[100%]" />

        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' }}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default channelDetail