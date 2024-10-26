import React from 'react';
import "../styles/Blog.css";
import { Link } from 'react-router-dom'; // Import Link for routing

function Blog() {
    const blogPosts = [
        {
            title: 'How to Manage Your Time Effectively as a PhD Student',
            date: 'August 15, 2024',
            excerpt: 'Time management is crucial for PhD students. Learn strategies to effectively balance your research, coursework, and personal life.',
            link: '#'
        },
        {
            title: 'Top 10 Research Tools for PhD Students',
            date: 'August 10, 2024',
            excerpt: 'Discover the best tools and resources to enhance your research productivity and efficiency.',
            link: '#'
        },
        // Add more blog posts here
    ];

    return (
        <section className="blog">
            <div className="container">
                <h2>Our Blog</h2>
                <div className="blog-content">
                    <div className="blog-posts">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="blog-post">
                                <h3>{post.title}</h3>
                                <p className="date">{post.date}</p>
                                <p className="excerpt">{post.excerpt}</p>
                                <a href={post.link} className="btn">Read More</a>
                            </div>
                        ))}
                    </div>
                    <aside className="sidebar">
                        <div className="widget">
                            <h3>Recent Posts</h3>
                            <ul>
                                {blogPosts.map((post, index) => (
                                    <li key={index}><a href={post.link}>{post.title}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="widget">
                            <h3>Helpful Links</h3>
                            <ul>
                                <li><Link to="/faq">FAQ</Link></li>
                                {/* Add more links if needed */}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default Blog;
