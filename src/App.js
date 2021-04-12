import React, { useState } from 'react';

// components
import PostList from './components/PostList';

// mock data
import posts from './data/posts.json';
import users from './data/users.json';

const App = () => {
    const [theme, setTheme] = useState('light');

    const updateTheme = selectedTheme => {
        setTheme(selectedTheme);
    };

    return (
        <div
            style={{
                background: theme === 'light' ? '#eee' : '#333',
                color: theme === 'light' ? '#333' : '#eee',
            }}
        >
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
            <PostList posts={posts} users={users} />
        </div>
    );
};

export default App;
