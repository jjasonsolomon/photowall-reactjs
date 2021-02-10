import React, { Component } from 'react'
import Comments from './Comments'
import Photo from './Photo'

class Single extends Component
{
    render()
    {

        const {match,posts} = this.props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)

        const comments = this.props.comments


        return (

            <div className='single-photo'>
            {/* components are reusable so pass in Photo */}
            <Photo post={post} {...this.props}/>
            <Comments addComment={this.props.addComment} comments={comments} id={id}/>

            
            </div>

        )
    }
}
export default Single