import React, { Component } from 'react'
import './watch.css'
import Header from '../../components/Header'
import CaratulaVideo from '../../components/CaratulaVideo'
import WatchVideo from '../../components/WatchVideo'

export default class Watch extends Component{

  state = {
    videosDB: [
      {
        id:1,
        url_video: "https://cdn.pixabay.com/photo/2021/08/19/12/53/bremen-6557996__340.jpg",
        url_image_user: "https://mundoperdido.com.br/wp-content/uploads/2019/07/Frases-para-namorada-status-tumblr.jpeg",
        title: "the coldest place in the world",
        name_user: "adventure Time",
        numberViews: "1.2M",
        publishedTime: "1 months ago"
      },
      {
        id:2,
        url_video: "https://cdn.pixabay.com/photo/2021/07/08/03/55/mount-everest-6395759_960_720.jpg",
        url_image_user: "https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081259_960_720.jpg",
        title: "visiting the highest hill in the world",
        name_user: "The focus",
        numberViews: "12K",
        publishedTime: "1 months ago"
      },
      {
        id:3,
        url_video: "https://cdn.pixabay.com/photo/2015/12/08/00/30/bridge-1081782__340.jpg",
        url_image_user: "https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081259_960_720.jpg",
        title: "the most beautiful bridge - SF",
        name_user: "The focus",
        numberViews: "12K",
        publishedTime: "1 months ago"
      },
      {
        id:4,
        url_video: "https://cdn.pixabay.com/photo/2021/08/19/12/53/bremen-6557996__340.jpg",
        url_image_user: "https://mundoperdido.com.br/wp-content/uploads/2019/07/Frases-para-namorada-status-tumblr.jpeg",
        title: "the coldest place in the world",
        name_user: "adventure Time",
        numberViews: "7K",
        publishedTime: "1 months ago"
      },
      {
        id:5,
        url_video: "https://cdn.pixabay.com/photo/2021/07/08/03/55/mount-everest-6395759_960_720.jpg",
        url_image_user: "https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081259_960_720.jpg",
        title: "visiting the highest hill in the world",
        name_user: "The focus",
        numberViews: "12K",
        publishedTime: "1 months ago"
      },
      {
        id:6,
        url_video: "https://cdn.pixabay.com/photo/2015/12/08/00/30/bridge-1081782__340.jpg",
        url_image_user: "https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081259_960_720.jpg",
        title: "the most beautiful bridge - SF",
        name_user: "The focus",
        numberViews: "12K",
        publishedTime: "1 months ago"
      },
      {
        id:7,
        url_video: "https://cdn.pixabay.com/photo/2021/08/19/12/53/bremen-6557996__340.jpg",
        url_image_user: "https://mundoperdido.com.br/wp-content/uploads/2019/07/Frases-para-namorada-status-tumblr.jpeg",
        title: "the coldest place in the world",
        name_user: "adventure Time",
        numberViews: "2K",
        publishedTime: "1 months ago"
      },
      {
        id:8,
        url_video: "https://cdn.pixabay.com/photo/2021/07/08/03/55/mount-everest-6395759_960_720.jpg",
        url_image_user: "https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081259_960_720.jpg",
        title: "visiting the highest hill in the world",
        name_user: "The focus",
        numberViews: "12K",
        publishedTime: "1 months ago"
      },
      {
        id:9,
        url_video: "https://cdn.pixabay.com/photo/2015/12/08/00/30/bridge-1081782__340.jpg",
        url_image_user: "https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081259_960_720.jpg",
        title: "the most beautiful bridge - SF",
        name_user: "The focus",
        numberViews: "2K",
        publishedTime: "1 months ago"
      },
      {
        id:10,
        url_video: "https://cdn.pixabay.com/photo/2021/08/19/12/53/bremen-6557996__340.jpg",
        url_image_user: "https://mundoperdido.com.br/wp-content/uploads/2019/07/Frases-para-namorada-status-tumblr.jpeg",
        title: "the coldest place in the world",
        name_user: "adventure Time",
        numberViews: "2K",
        publishedTime: "1 months ago"
      },
      {
        id:11,
        url_video: "https://cdn.pixabay.com/photo/2021/07/08/03/55/mount-everest-6395759_960_720.jpg",
        url_image_user: "https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081259_960_720.jpg",
        title: "visiting the highest hill in the world",
        name_user: "The focus",
        numberViews: "12K",
        publishedTime: "1 months ago"
      },
      {
        id:12,
        url_video: "https://cdn.pixabay.com/photo/2015/12/08/00/30/bridge-1081782__340.jpg",
        url_image_user: "https://cdn.pixabay.com/photo/2019/03/25/20/17/kaohsiung-4081259_960_720.jpg",
        title: "the most beautiful bridge - SF",
        name_user: "The focus",
        numberViews: "2K",
        publishedTime: "1 months ago"
      }
    ]
  }

  render(){
    return(
      <div className="container_watch">
      <Header/>

        <WatchVideo/>

        <div className="container_video-recommendations">
        <div className="item_video-recommendation">
          {this.state.videosDB.map((video) => (
            <CaratulaVideo
              key={video.id}
              url_image_video={video.url_video}
              url_image_user={video.url_image_user}
              tittle_video={video.title}
              name_user_video={video.name_user}
              numberViews={video.numberViews}
              publishedTime={video.publishedTime}
            />
          ))}
        </div>
        </div>

      </div>
    )
  }
}
