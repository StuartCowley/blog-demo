import React from 'react';

// components
import PostEntry from './post-entry';

const PostList = ({ posts, users }) => {
    return (posts || []).map(post => {
        const user = users.find(({ id }) => id === post.userId);
        return <PostEntry key={post.id} post={post} user={user} />;
    });
};

export default PostList;
