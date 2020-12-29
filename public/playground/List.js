import React, { Component } from 'playground/node_modules/.bin/playground/node_modules/react';

class List extends Component {
    render() {
      return (
  
        <div>
  
  
          <ol>
            {this.props.about.map((about, index) => <li key={index} >{about}</li>)}
          </ol>
  
        </div>
      );
    }
  }

  export default List;