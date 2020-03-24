import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './Introduction.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: []
    }
  }

  getPhotos () {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3002/api/intro`,
      success: function(data) {
        this.setState({
          intro: data
        })
      }.bind(this),

    })
  }

  componentDidMount () {
    this.getPhotos();
  }
  render () {
    return (
      <div>
        <Introduction info={this.state.intro}/>
      </div>
    )
  }
}
export default App;

export {App};