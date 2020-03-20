import React from 'react';
import Img from 'react-image';
import Gallery from 'react-photo-gallery';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
    this.popUp = this.popUp.bind(this);
  }

  popUp(photos) {
    this.setState({
      photos: photos[0]
    })

    var modal = document.getElementById('modal');
    var photos = document.getElementById('photos');
    var span = document.getElementsByClassName('close');

    modal.style.display = "block";

    span.onclick = function() {
      modal.style.display = 'none';
    }

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  }


  render() {
    return (
      <div>
        {this.props.info.map((oneInfo, index) => (
          <div key={index}>
            <div className="column" onClick={() => this.popUp(oneInfo.photos)} id="photos">
              <div className="row">
                <img src={oneInfo.photos[0]} />
                <img src={oneInfo.photos[1]} />
              </div>
              <div className="row">
                <img src={oneInfo.photos[4]} />
                <img src={oneInfo.photos[3]} />
              </div>
              <div className="row">
                <img src={oneInfo.photos[2]} />
                <img src={oneInfo.photos[1]} />
              </div>
              <div className="row">
                <img src={oneInfo.photos[4]} />
                <img src={oneInfo.photos[0]} />
              </div>
            </div>
            <div className="title">{oneInfo.title}</div>
            <div className="description">{oneInfo.description}</div>
          </div>
        ))}
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
              <img src={this.state.photos} />
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction;

export {Introduction};