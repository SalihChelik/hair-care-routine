import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jeval.com.au/collections/hair-care/products.json?page=1');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                console.log(localStorage.getItem("q1"));
                console.log(localStorage.getItem("q2"));
                console.log(localStorage.getItem("q3"));
                console.log(localStorage.getItem("q4"));
                console.log(localStorage.getItem("q5"));
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>PRODUCTS PAGE!</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
            <Link to="/"><button>Retake Quiz</button></Link>
        </div>
    );
}

export default Products;
