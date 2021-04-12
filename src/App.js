import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import PostList from './components/PostList';

// consts
const API = 'https://jsonplaceholder.typicode.com';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(undefined);

    const themeConfig = {
        light: { background: '#eee', color: '#333' },
        dark: { background: '#333', color: '#eee' },
    };

    const updateTheme = selectedTheme => {
        setTheme(selectedTheme);
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
    return (
        <div style={themeConfig[theme]}>
            <header className="App-header">
                <h1>Blog Demo</h1>
                <div>
                    <button type="button" onClick={() => updateTheme('light')}>
                        light
                    </button>
                    <button type="button" onClick={() => updateTheme('dark')}>
                        dark
                    </button>
                </div>
            </header>
            {posts.length > 0 && users.length > 0 ? (
            <PostList posts={posts} users={users} />
            ) : (
                <div>Loading...</div>
            )}
            {error && <div>{error}</div>}
        </div>
    );
};

export default App;
