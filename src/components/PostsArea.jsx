import React from 'react';

const PostItem = ({post, index, onDelete, onUp, onDown}) => 
<li>
    <h3>{post.title}</h3>
    <div>
        <p>
            {post.body}
        </p>
        <p>
            {post.counter}
            <a onClick={onUp(index)} className='btn' href=''>Up</a>
            <a onClick={onDown(index)}  className='btn' href=''>Down</a>
        </p>
        <button onClick={onDelete(index)}>Borrar</button>
    </div>
</li>;

const PostsArea = props => {
    const { posts } = props;
    const data = posts.map((post, index) => (<PostItem { ...props } index={index} key={post.id} post={post}/>));
    return <ul>{data}</ul>
}

export default PostsArea;