import React from 'react';
import Img from 'react-image';
import Gallery from 'react-photo-gallery';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
    this.showSlides = this.showSlides.bind(this);
  }

  openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  closeModal() {
    document.getElementById("myModal").style.display = "none";
  }


  currentSlide(n) {
    this.showSlides(slideIndex = n);
  }

  showSlides(n) {
    var slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }


  render() {
    return (
    <>
      <div>
        {this.props.info.map((oneInfo, index) => (
          <div key={index}>
            <div className="row" id="photos">
              <div className="column">
                <img src={oneInfo.photos[0]} onClick={() => this.openModal()}/>
              </div>
              <div className="column">
                <img src={oneInfo.photos[4]} onClick={() => this.openModal()}/>
              </div>
              <div className="column">
                <img src={oneInfo.photos[1]} onClick={() => this.openModal()}/>
              </div>
              <div className="column">
                <img src={oneInfo.photos[4]} onClick={() => this.openModal()}/>
              </div>
            </div>
            <div className="title">{oneInfo.title}</div>
            <div className="description">{oneInfo.description}</div>
          </div>
            <div id="myModal" className="modal">
            <span className="close" onClick={() => this.closeModal()}>&times;</span>
            <div className="modal-content">
                <div class="mySlides">
                  <img src={oneInfo.photos[0]} />
                </div>
                <div class="mySlides">
                  <img src={oneInfo.photos[1]} />
                </div>
                <div class="mySlides">
                  <img src={oneInfo.photos[2]} />
                </div>
                <div class="mySlides">
                  <img src={oneInfo.photos[3]} />
                </div>
            </div>
          <a class="prev" onClick="plusSlides(-1)">&#10094;</a>
          <a class="next" onClick="plusSlides(-1)">&#10095;</a>
        </div>
        ))}
      </div>
    </>
    )
  }
}

export default Introduction;

export {Introduction};