import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    useEffect(() => {

        localStorage.removeItem('q1');
        localStorage.removeItem('q2');
        localStorage.removeItem('q3');
        localStorage.removeItem('q4');
        localStorage.removeItem('q5');
    }, []);

    return (
        <div class="header">
            <h1>Welcome to Our App</h1>
            <p>Take out test to get a personalised self care routine based on your needs.</p>
            <Link to="/questions/1"><button>Start</button></Link>

        </div>
    );
}

export default Home;
