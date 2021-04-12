import React, { useEffect, useState } from 'react';

// components
import PostList from './components/PostList';

// mock data
import mockPosts from './data/posts.json';
import mockUsers from './data/users.json';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const themeConfig = {
        light: { background: '#eee', color: '#333' },
        dark: { background: '#333', color: '#eee' },
    };

    const updateTheme = selectedTheme => {
        setTheme(selectedTheme);
    };

    useEffect(() => {
        setPosts(mockPosts);
        setUsers(mockUsers);
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
        </div>
    );
};

export default App;
