import React from 'react';


class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: '',
      pictures: []
    }

  }

  openModal(url, pictures) {
    this.setState({
      photos: url,
      pictures: pictures
    })

    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];

    modal.style.display = 'block';

    span.onclick = function() {
      modal.style.display = 'none';
    }

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  }

  showSlides(n) {
    var currentSlide = this.state.photos;
    var currentIndex = this.state.pictures.indexOf(currentSlide);
    var nextIndex = currentIndex + n;
    if (nextIndex >= this.state.pictures.length) {
      var nextSlide = this.state.pictures[0];
      this.setState({
        photos: nextSlide
      });
    } else if (nextIndex < 0) {
      nextSlide = this.state.pictures[this.state.pictures.length - 1];
      this.setState({
        photos: nextSlide
      });
    } else {
      nextSlide = this.state.pictures[nextIndex];
      this.setState({
        photos: nextSlide
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.info.map((oneInfo, index) => (
          <div key={index}>
            <div className="grid-container" id="photos">
              <div className="pic1">
                <img src={oneInfo.photos[0]} onClick={() => this.openModal(oneInfo.photos[0], oneInfo.photos)} />
              </div>
              <div className="pic2">
                <img src={oneInfo.photos[4]} onClick={() => this.openModal(oneInfo.photos[4], oneInfo.photos)} />
              </div>
              <div className="pic3">
                <img src={oneInfo.photos[1]} onClick={() => this.openModal(oneInfo.photos[1], oneInfo.photos)} />
              </div>
              <div className="pic4">
                <img src={oneInfo.photos[2]} onClick={() => this.openModal(oneInfo.photos[2], oneInfo.photos)} />
              </div>
              <div className="pic5">
                <img src={oneInfo.photos[3]} onClick={() => this.openModal(oneInfo.photos[2], oneInfo.photos)} />
              </div>
            </div>
            <div className="grid-container-2">
            <h2 className="title">{oneInfo.title}</h2>
            <div className="grid-container-3">
              <i className="fas fa-home"></i>
                <p>Private room in house</p>
              <i className="fas fa-spray-can"></i>
                <p>Sparkling clean</p>
              <i className="fas fa-map-marker-alt"></i>
                <p>Great location</p>
            </div>
            <p className="description">{oneInfo.description}</p>
            <div className="grid-container-4">
              <h4>Amenities</h4>
              <i className="fas fa-wifi"></i>
              <p>Wifi</p>
              <i className="fas fa-parking"></i>
              <p>Free parking</p>
              <i className="fas fa-swimming-pool"></i>
              <p>Pool</p>
              <i className="fas fa-tv"></i>
              <p>Cable TV</p>
            </div>
            <div className="grid-container-5">
              <h4>Sleeping Arrangements</h4>
              <div className="grid-container-6">
              <i className="fas fa-bed"></i><i className="fas fa-bed"></i>
              <h5>Bedroom 1</h5>
              <p>2 single beds</p>
              </div>
            </div>
            </div>
          </div>
        ))}
        <div id="myModal" className="modal">
           <span className="close">&times;</span>
           <div className="modal-content">
              <img src={this.state.photos} />
              <a className="prev" onClick={() => this.showSlides(-1)}>&#10094;</a>
              <a className="next" onClick={() => this.showSlides(1)}>&#10095;</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Introduction;

export {Introduction};