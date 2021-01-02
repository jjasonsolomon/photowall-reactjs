import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'



class Main extends Component {

  constructor()
  {
    console.log('Constructor')
    super()
    this.state = {

      posts:[]
    }
      this.removePhoto = this.removePhoto.bind(this);
    
  }
  removePhoto(postRemoved)
  {
    console.log(postRemoved.description);
    this.setState((state) => ({

      posts: state.posts.filter(post => post !== postRemoved)

    }))

  }

  componentDidMount()
  {
    console.log('ComponentDidMount')

    const data = SimulateFetchfromDB() 
    this.setState({
      posts:data
    })
  }

  componentDidUpdate(prevProps,prevState)
  {
    alert('Re-rendered')
console.log(prevState.posts)
console.log(this.state)
  }

  
  
  
    render() {
      console.log('Render Method')

      return (
  
        <>

          <Title title = {'PhotoWall'}/>
          <PhotoWall posts ={this.state.posts} onRemovePhoto={this.removePhoto}/>


  
        </>
      );
    }
  }

  function SimulateFetchfromDB()
  {
    return  [{
      id: 0,
      description: "Beautiful landscape",
      imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
      "3919321_1443393332_n.jpg"
      }, {
      id: 1,
      description: "Chill Out",
      imageLink: "https://img.etimg.com/thumb/msid-68721417,width-650,imgsize-1016106,,resizemode-4,quality-100/nature1_gettyimages.jpg"
      }, {
      id: 2,
      description: "On a vacation!",
      imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
  }]
}

  export default Main;