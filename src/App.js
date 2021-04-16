import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import PostList from './components/PostList';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';

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
                <Navigation />
                <Switch>
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
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        </ThemeContext.Provider>
    );
};

export default App;
