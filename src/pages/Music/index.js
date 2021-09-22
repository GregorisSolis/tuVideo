import React, { Component } from 'react'
import CaratulaVideo from '../../components/CaratulaVideo'

export default class Music extends Component{

  state = {
    videosDB: [
      {
        id:1,
        url_video: "https://cdn.pixabay.com/photo/2021/08/19/12/53/bremen-6557996__340.jpg",
        url_image_user: "https://mundoperdido.com.br/wp-content/uploads/2019/07/Frases-para-namorada-status-tumblr.jpeg",
        title: "the coldest place in the world",
        name_user: "Desafio Tokio",
        numberViews: "1.2M",
        publishedTime: "1 months ago"
      },
      {
        id:2,
        url_video: "https://cdn.pixabay.com/photo/2020/12/03/12/35/sunset-5800386_960_720.jpg",
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
        name_user: "Desafio Tokio",
        numberViews: "7K",
        publishedTime: "1 months ago"
      },
      {
        id:5,
        url_video: "https://cdn.pixabay.com/photo/2020/12/03/12/35/sunset-5800386_960_720.jpg",
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
        name_user: "Desafio Tokio",
        numberViews: "2K",
        publishedTime: "1 months ago"
      },
      {
        id:8,
        url_video: "https://cdn.pixabay.com/photo/2020/12/03/12/35/sunset-5800386_960_720.jpg",
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
      }
    ]
  }

  componentDidMount(){
    localStorage.setItem('page', 'Music')
  }

  render(){
    return(
      <div className="container-home">

        <div className="container-videosForYou">
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
    )
  }
}
