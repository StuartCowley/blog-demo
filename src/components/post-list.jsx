import React from 'react';

// components
import PostEntry from './post-entry';

const PostList = ({ posts }) => {
    return (posts || []).map(post => <PostEntry key={post.id} post={post} />);
};

export default PostList;
