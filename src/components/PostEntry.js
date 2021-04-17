import React from 'react';
import { useParams } from 'react-router-dom';

// custom hooks
import { useFetch } from '../hooks/useFetch';

// consts
const API = process.env.REACT_APP_JSON_PLACEHOLDER_API;

const PostEntry = () => {
    const { id } = useParams();
    const [post] = useFetch(`${API}/posts/${id}`);

    return <pre>{JSON.stringify(post)}</pre>;
};

export default PostEntry;
