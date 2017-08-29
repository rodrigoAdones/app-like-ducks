import React from 'react';

const PostItem = ({post}) => 
<li>
    <h3>{post.title}</h3>
    <div>{post.body}</div>
</li>;

const PostsArea = ({posts}) => {
    const data = posts.map(post => (<PostItem key={post.id} post={post}/>));
    return <ul>{data}</ul>
}

export default PostsArea;