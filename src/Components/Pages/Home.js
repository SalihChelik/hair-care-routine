import React from 'react';
import backgroundImage from './Images/mainpic.jpg';
import { Link } from 'react-router-dom';
import './Home.css'


function Home() {
    return (
        <div>

            <h1>Welcome to Our App</h1>
            <img src={backgroundImage}></img>
            <Link to="/questions/1">Click me</Link>
            <button>Start</button>

        </div>
    );
}

export default Home;
