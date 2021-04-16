import React, { useEffect, useState } from 'react';

// components
import PostList from './components/PostList';
import Header from './components/Header';

// contexts
import { ThemeConfig, ThemeContext } from './contexts/ThemeContext';
import { useFetch } from './hooks/useFetch';

// consts
const API = 'https://jsonplaceholder.typicode.com';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [posts, setPosts] = useFetch(`${API}/posts`);
    const [users] = useFetch(`${API}/users`);

    const removePost = id => {
        setPosts(prev => prev.filter(post => post.id !== id));
    };

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
