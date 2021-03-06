const api = "http://localhost:3001"
// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token){
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(({categories})=>categories)

export const getCategoryPosts = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())

export const getPosts = () => 
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())

export const addPost = ({id, timestamp=Date.now(), title, body, author, category}) => 
    fetch(`${api}/posts`, { method:'POST', 
        headers : {...headers, 'Content-Type' : 'application/json' },
        body : JSON.stringify({id, timestamp, title, body, author, category}) })
        .then(res => res.json())

export const getPost = ( id ) =>
    fetch(`${api}/posts/${id}`, { headers })
        .then(res => res.json())

// option can be 'upVote' or 'downVote'
export const votePost = (id, option='upVote') =>
    fetch(`${api}/posts/${id}`,
            {method:'POST', headers : {...headers, 'Content-Type':'application/json'}, body:JSON.stringify({option})})
        .then(res => res.json())
       
export const editPost = ({id, title, body}) => 
    fetch(`${api}/posts/${id}`,
            {method:'PUT', headers : {...headers, 'Content-Type':'application/json'}, body:JSON.stringify({title, body})})
        .then(res => res.json())

export const deletePost = ( id ) =>
    fetch(`${api}/posts/${id}`, {method:'DELETE', headers})
        .then(res => res.json())

export const getPostComments = ( id ) =>
    fetch(`${api}/posts/${id}/comments`, { headers })
        .then(res => res.json())    

export const getComment = ( id ) => 
    fetch(`${api}/comments/${id}`, { headers })
        .then(res => res.json())

export const addComment = ({id, timestamp=Date.now(), body, author, parentId}) => 
    fetch(`${api}/comments`,
            {method:'POST', headers : {...headers, 'Content-Type':'application/json'}, body:JSON.stringify({id, timestamp, body, author, parentId})})
        .then(res => res.json())

// option can be 'upVote' or 'downVote'
export const rateComment = (id, option='upVote') =>
    fetch(`${api}/comments/${id}`,
            {method:'POST', headers : {...headers, 'Content-Type':'application/json'}, body:JSON.stringify({option})})
        .then(res => res.json())

export const editComment = ({id, body, timestamp=Date.now()}) => 
    fetch(`${api}/comments/${id}`,
            {method:'PUT', headers : {...headers, 'Content-Type':'application/json'}, body:JSON.stringify({timestamp, body})})
        .then(res => res.json())

export const deleteComment = ( id ) =>
    fetch(`${api}/comments/${id}`, {method:'DELETE', headers})
        .then(res => res.json())


/* 
    fetch(`${api}/`, { headers })
        .then(res => res.json())
*/