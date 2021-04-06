import React from 'react';

const PostEntry = ({ post, user }) => {
    const { title, body } = post || {};
    const { name } = user || {};
    return (
        <article>
            <h2>{title}</h2>
            <h3>by {name}</h3>
            <p>{body}</p>
        </article>
    );
};

export default PostEntry;
