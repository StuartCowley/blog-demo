import React from 'react';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

const PostEntry = ({ post, user }) => {
    const { title, body } = post;
    const { name } = user;
    return (
        <article>
            <h2>{title}</h2>
            <h3>by {name}</h3>
            <p>{body}</p>
        </article>
    );
};

PostEntry.propTypes = {
    post: PostType.isRequired,
    user: UserType.isRequired,
};

export default PostEntry;
