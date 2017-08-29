import React from 'react';

const PostItem = ({post, index, onDelete}) => 
<li>
    <h3>{post.title}</h3>
    <div>
        <p>
            {post.body}
        </p>
        <button onClick={onDelete(index)}>Borrar</button>
    </div>
</li>;

const PostsArea = ({posts, onDelete}) => {
    const data = posts.map((post, index) => (<PostItem onDelete={onDelete} index={index} key={post.id} post={post}/>));
    return <ul>{data}</ul>
}

export default PostsArea;