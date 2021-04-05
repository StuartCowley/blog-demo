import React from 'react';

// components
import PostList from './components/post-list';

// mock data
import posts from './data/posts.json';

const App = () => {
    return (
        <>
            <header className="App-header">
                <h1>Blog Demo</h1>
            </header>
            <PostList posts={posts} />
        </>
    );
};

export default App;
