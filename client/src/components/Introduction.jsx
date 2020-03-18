import React from 'react';
import Img from 'react-image';

class Introduction extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {/* {this.props.info.photos.map((photo, index) => (
          <div key={index}>
            <Img src={photo}/>
          </div>
        ))} */}
        <Img src={this.props.info.photos} />
        <div className="title">{this.props.info.title}</div>
        <div className="description">{this.props.info.description}</div>
      </div>
    )
  }
}

export default Introduction;