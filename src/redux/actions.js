import { $CombinedState } from "redux";
import { database } from "../database/config"

export function startAddingPost(post)
{
    return (dispatch) => {
        return database.ref('posts')
        .update({[post.id]:post})
        .then(()=> {dispatch(addPost(post))
            
        })
        .catch((error) => {console.log(error);})
    } 
}

export function startLoadingPost()
{
    return (dispatch) => {
        return database.ref('posts')
        .once('value')
        .then((snapshot) => {

            let posts = [];
            snapshot.forEach((childSnapshot) => {

                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        
        })
        .catch((error => console.log(error)))
    }
}

export function startRemovingPost(index,id)
{
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove()
        .then(() => {

            dispatch(removePost(index))
        })
    }
}


export function removePost (index)
{
    
    return{
        type : 'REMOVE_POST',
        index : index
    } 

}





export function addPost (post)
{
    
    return{
        type : 'ADD_POST',
        post : post
    } 

}

export function addComment (comment,postID)
{
    return{
        type : 'ADD_COMMENT',
        comment: comment,
        postID: postID
    }
}


export function startAddingComment(comment,postID)
{
    return (dispatch) => {
        return database.ref(`comments/${postID}`)
        .push(comment)
        .then(()=> {dispatch(addComment(comment,postID))
            
        })
        .catch((error) => {console.log(error);})
    } 
}

export function startLoadingComments()
{
    return (dispatch) => {
        return database.ref('comments')
        .once('value')
        .then ((snapshot)=>
        {

            let comments = [];
            snapshot.forEach((childSnapshot) => {

           comments[childSnapshot.key] = Object.values(childSnapshot.val()); 
           console.log("Ckey", childSnapshot.key);

           console.log("CValue", Object.values(childSnapshot.val()));



            })
            dispatch(loadComments(comments))
            console.log("From comments",comments)
        
        })
        .catch((error => console.log(error)))
    }
    }



export function loadPosts(posts)
{
    return{
        type:'LOAD_POSTS',
        posts
    }
}


export function loadComments(comments)
{
    return{
        type:'LOAD_COMMENTS',
        comments
    }
}