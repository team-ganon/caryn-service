import React from 'react';
import Img from 'react-image';
import Gallery from 'react-photo-gallery';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        {this.props.info.map((oneInfo, index) => (
          <div key={index}>
            {/* {oneInfo.photos.map((photo, index) => (
              <div className="images" key={index}>
                <Img src={photo}/>
              </div>
            ))} */}
            <div className="mainPhoto">
              <img src={oneInfo.photos[0]} style={{width:"40%", height:"100%"}} />
            </div>
            <div className="subPhotos">
              <img src={oneInfo.photos[1]} style={{width:"20%", height:"20%"}}/>
              <img src={oneInfo.photos[2]} style={{width:"20%", height:"20%"}}/>
              <img src={oneInfo.photos[3]} style={{width:"20%", height:"20%"}}/>
              <img src={oneInfo.photos[4]} style={{width:"20%", height:"20%"}}/>
            </div>
            <div className="title">{oneInfo.title}</div>
            <div className="description">{oneInfo.description}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Introduction;