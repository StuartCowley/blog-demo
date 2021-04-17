import React from 'react';
import { useParams } from 'react-router-dom';

// components
import PostEntrySummary from './PostEntrySummary';

// custom hooks
import { useFetch } from '../hooks/useFetch';

// consts
const API = process.env.REACT_APP_JSON_PLACEHOLDER_API;

const PostEntry = () => {
    const { id } = useParams();
    const [post] = useFetch(`${API}/posts/${id}`);
    const [user] = useFetch(post ? `${API}/users/${post.userId}` : undefined);

    return <>{post && user && <PostEntrySummary post={post} user={user} />}</>;
};

export default PostEntry;
