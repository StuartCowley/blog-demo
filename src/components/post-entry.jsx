import React from 'react';

const PostEntry = ({ post }) => {
    const { title, body } = post || {};
    return (
        <article>
            <h2>{title}</h2>
            <p>{body}</p>
        </article>
    );
};

export default PostEntry;
