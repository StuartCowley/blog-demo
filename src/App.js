import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Route exact path="/">
                    <div style={ThemeConfig[theme]}>
                        <Header />
                        {posts.length > 0 && users.length > 0 ? (
                            <PostList
                                posts={posts}
                                users={users}
                                removePost={removePost}
                            />
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                </Route>
                <Route path="/about">
                    <h1>About</h1>
                </Route>
            </Router>
        </ThemeContext.Provider>
    );
};

export default App;
