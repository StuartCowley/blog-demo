import React, { useState } from 'react';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

const PostEntry = ({ post, user }) => {
    const { title, body } = post;
    const { name } = user;

    const [likeCounter, setLikeCounter] = useState(0);
    const [theme, setTheme] = useState('light');

    const updateCounter = () => {
        setLikeCounter(previousCounter => previousCounter + 1);
    };
    const updateTheme = selectedTheme => {
        setTheme(selectedTheme);
    };
    return (
        <article
            style={{
                background: theme === 'light' ? '#eee' : '#333',
                color: theme === 'light' ? '#333' : '#eee',
            }}
        >
            <h2>{title}</h2>
            <h3>by {name}</h3>
            <p>{body}</p>
            <div>
                <span>{likeCounter}</span>
                <button type="button" onClick={() => updateCounter()}>
                    +
                </button>
                <button type="button" onClick={() => updateTheme('light')}>
                    light
                </button>
                <button type="button" onClick={() => updateTheme('dark')}>
                    dark
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
