import React from 'react';
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


function PhotoWall(props)
{

    return (

        <div>
        <Link  to='/AddPhoto' className="addIcon"></Link>
        {/* <button onClick={props.onNavigate} className="addIcon"></button> */}

        <div className="photo-grid"> 
            {props.posts
            
            .sort((x,y) => {
             return y.id-x.id;
            })

            .map((post,index) => <Photo key={index} post={post} {...props} index = {index}/>)}
        </div>
        </div>

    );

}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}
export default PhotoWall;