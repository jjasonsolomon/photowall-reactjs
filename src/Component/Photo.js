import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'


function Photo(props)
{

    const post = props.post;

    return <figure className="figure" >

       <Link to ={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description} /></Link>

            
            <figcaption>
                <p>{post.description}</p>
            </figcaption>
            <div className="button-container">
                <button className="button" onClick = {()=>{
                     props.removePost(props.index, post.id)
                     props.history.push('/')
                }}>Remove</button>
            </div>
        </figure>;

}

Photo.propTypes = {
    post: propTypes.object.isRequired,
}

export default Photo;