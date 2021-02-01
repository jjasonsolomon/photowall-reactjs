import React, { Component } from 'react';
import Title from './Title'
import { Route } from 'react-router-dom'
import PhotoWall from './PhotoWall'

class Main extends Component {

  componentDidMount() {
    this.props.removePost(2);
  }


  render() {





    return (


      <div>
        <Route exact path="/" render={() => (

          <div>


            <Title title={'PhotoWall'} />

            <PhotoWall {...this.props} />

          </div>


        )} />



        {/* <Route path="/AddPhoto" render={({ history }) => (
          <AddPhoto onAddPhoto={(addedPost) => {

            this.addedPhoto(addedPost)
            history.push("/")
          }} />

        )} /> */}




      </div>



    );
  }
}


export default Main;