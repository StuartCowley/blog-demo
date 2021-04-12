import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import PostList from './components/PostList';
import Header from './components/Header';

// contexts
import { ThemeConfig, ThemeContext } from './contexts/ThemeContext';

// consts
const API = 'https://jsonplaceholder.typicode.com';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(undefined);

    const removePost = id => {
        setPosts(prev => prev.filter(post => post.id !== id));
    };

    useEffect(() => {
        axios
            .get(`${API}/posts`)
            .then(response => {
                if (response.data && response.status === 200) {
                    setPosts(response.data);
                }
            })
            .catch(() => setError('There was an error fetching posts'));

        axios
            .get(`${API}/users`)
            .then(response => {
                if (response.data && response.status === 200) {
                    setUsers(response.data);
                }
            })
            .catch(() => setError('There was an error fetching users'));
    }, []);

    useEffect(() => {
        if (posts.length > 0) {
            document.title = `My blog has ${posts.length} entries`;
        }
    }, [posts]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div style={ThemeConfig[theme]}>
                <Header />
                {posts.length > 0 && users.length > 0 ? (
                    <PostList
                        posts={posts}
                        users={users}
                        removePost={removePost}
                    />
                ) : (
                    !error && <div>Loading...</div>
                )}
                {error && <div>{error}</div>}
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
