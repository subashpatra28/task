import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Post() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then (res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
    }, [] )
    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}> {post} </li> )
                }
            </ul>
        </div>
    )
}

export default Post
