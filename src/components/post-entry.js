import React, { useState } from 'react';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

const PostEntry = ({ post, user }) => {
    const { title, body } = post;
    const { name } = user;

    const [likeCounter, setLikeCounter] = useState(0);

    const updateCounter = () => {
        setLikeCounter(previousCounter => previousCounter + 1);
    };
    return (
        <article>
            <h2>{title}</h2>
            <h3>by {name}</h3>
            <p>{body}</p>
            <div>
                <span>{likeCounter}</span>
                <button type="button" onClick={() => updateCounter()}>
                    +
                </button>
            </div>
        </article>
    );
};

PostEntry.propTypes = {
    post: PostType.isRequired,
    user: UserType.isRequired,
};

export default PostEntry;
