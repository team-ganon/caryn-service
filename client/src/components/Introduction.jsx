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

  currentSlide(n) {
    this.showSlides(slideIndex = n);
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
            <div className="row" id="photos">
              <div className="column">
                <img src={oneInfo.photos[0]} onClick={() => this.openModal(oneInfo.photos[0], oneInfo.photos)} />
              </div>
              <div className="column">
                <img src={oneInfo.photos[4]} onClick={() => this.openModal(oneInfo.photos[4], oneInfo.photos)} />
              </div>
              <div className="column">
                <img src={oneInfo.photos[1]} onClick={() => this.openModal(oneInfo.photos[1], oneInfo.photos)} />
              </div>
              <div className="column">
                <img src={oneInfo.photos[2]} onClick={() => this.openModal(oneInfo.photos[2], oneInfo.photos)} />
              </div>
            </div>
            <div className="title">{oneInfo.title}</div>
            <div className="description">{oneInfo.description}</div>
          </div>
        ))}
        <div id="myModal" className="modal">
           <span className="close">&times;</span>
           <div className="modal-content">
              <img src={this.state.photos} />

              <div className="mySlide">
                <div className="numbertext">1 / 5</div>
                <img src={this.state.pictures[0]} style={{display: 'none'}}/>
              </div>
              <div className="mySlide">
                <div className="numbertext">2 / 5</div>
                <img src={this.state.pictures[1]} style={{display: 'none'}}/>
              </div>
              <div className="mySlide">
                <div className="numbertext">3 / 5</div>
                <img src={this.state.pictures[2]} style={{display: 'none'}}/>
              </div>
              <div className="mySlide">
                <div className="numbertext">4 / 5</div>
                <img src={this.state.pictures[3]} style={{display: 'none'}}/>
              </div>
              <div className="mySlide">
                <div className="numbertext">5 / 5</div>
                <img src={this.state.pictures[4]} style={{display: 'none'}}/>
              </div>

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