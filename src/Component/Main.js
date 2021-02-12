import React, { Component } from "react";
import { Route } from "react-router-dom";
import PhotoWall from "./PhotoWall";
import { Link } from "react-router-dom";
import AddPhoto from "../Component/AddPhoto";
import Single from "./Single"

class Main extends Component {


    componentDidMount() {
        
        this.props.startLoadingPost();
    }

    render() {
       return (
       
        <div> 
            {/* Link is from the react router */}
            <h1>
                <Link to="/">Photowall</Link> 
            </h1>

            <Route exact path = "/" render={() => (
                <div>
                   
                    <PhotoWall {...this.props} />
                </div>
            )}/>

                  
            < Route path="/AddPhoto" render={ ({ history }) => (
                  <AddPhoto {...this.props}  onHistory={history}   />
                                      
                                        )
                                    }
                                />


                      <Route path='/single/:id' render={(params) => (
                                            // pass in all objects of params and props. params has to go after props because they both have a match object that overrites the other
                                            <Single {...this.props} {...params}/>
                                        )
                                    } /> 
            </div>
        );
    } 
}

export default Main;