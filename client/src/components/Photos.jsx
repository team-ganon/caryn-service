import React from 'react';

class Photos extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <img src={this.props.pictures[0]}/>
      </div>
    )
  }
}

export default Photos;