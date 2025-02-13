import React from 'react';

export const getSinglePost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json()
    return data 
}
const SinglePost = async ({params}) => {
    const p = await params
    const singlePost = await getSinglePost(p.id)
    return (
        <div>
           singlePost({JSON.stringify(singlePost)})
        </div>
    );
};

export default SinglePost;