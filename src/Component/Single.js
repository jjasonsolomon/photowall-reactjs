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

        console.log(post)


        return (

            
            <div className="single-photo">
                <Photo post = {post}/>
                <Comments/>

            </div>

        )
    }
}
export default Single