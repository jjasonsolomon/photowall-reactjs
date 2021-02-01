import posts from '../data/posts'
const postReducer = function post (state = posts,action)      

{
       console.log(action.index);

       return state;
}

export default postReducer;