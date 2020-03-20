import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './components/Introduction.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: []
    }
    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos (endPoint) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3002/api/${endPoint}`,
      success: function(data) {
        // console.log('in success')
        this.setState({
          intro: data
        })
      }.bind(this)
    })
  }

  componentDidMount () {
    var endPoint = window.location.href.split('api/');
    this.getPhotos(endPoint);
  }
  render () {
    return (
      <div>
        <Introduction info={this.state.intro}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export {App};