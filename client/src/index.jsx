import React from 'react';
import ReactDOM from 'react-dom';
import Photos from './components/Photos.jsx';
import $ from 'jquery';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    }
  }

  getPhotos () {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3002/api/imgs',
      success: function(imgs) {
        console.log('complete searched imgs');
        this.setState({
          pictures: imgs
        })
      }.bind(this)
    })
  }

  componentDidMount () {
    this.getPhotos();
  }
  render () {
    return (
      <div>
        <Photos pictures={this.state.pictures} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));