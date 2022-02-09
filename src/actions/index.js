import JSONPlaceholder from '../apis/JSONPlaceholder';

export const fetchPosts=()=>{
    return  async function(dispatch){
        const response = await JSONPlaceholder.get('/posts')

        dispatch({type:'FETCH_POSTS',payload:response.data})
    };
}
export const fetchUser=(id)=>async dispatch=>{
     const response = await JSONPlaceholder.get(`/users/${id}`);
     dispatch({type:'FETCH_USER',payload:response.data})
};











// Bad approach (use middleware for async action creaters)

// export const fetchPosts= ()=>{
    //     // bad approach braeking redux rules
    //    const response =  JSONPlaceholder.get('/posts');
    //     return {
    //         type:'FETCH_POSTS',
    //         payload:response,
    //     };
    // }