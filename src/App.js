import React from 'react';

// components
import PostList from './components/PostList';

// mock data
import posts from './data/posts.json';
import users from './data/users.json';

const App = () => {
    return (
        <>
            <header className="App-header">
                <h1>Blog Demo</h1>
            </header>
            <PostList posts={posts} users={users} />
        </>
    );
};

export default App;
