import React from 'react';
import "../styles/ResearchResources.css";

function ResearchResources() {
    return (
        <section className="research-resources">
            <div className="container">
                <h2>Research Resources</h2>
                <p>Explore our comprehensive collection of resources designed to support PhD students and researchers. From essential tools and databases to insightful guides and tutorials, we’ve got you covered.</p>
                
                <div className="resource-category">
                    <h3>Resource Categories</h3>
                    <ul>
                        <li>
                            <h4>Project Management Tools</h4>
                            <p>Manage your research projects efficiently with our curated list of project management tools. Whether you're organizing tasks, tracking progress, or collaborating with team members, these tools will help you stay on top of your research.</p>
                        </li>
                        <li>
                            <h4>Data Analysis Software</h4>
                            <p>Analyze your data with cutting-edge software that provides advanced statistical analysis, data visualization, and more. Our recommendations cover various needs from basic data handling to complex statistical modeling.</p>
                        </li>
                        <li>
                            <h4>Writing and Editing Resources</h4>
                            <p>Improve your academic writing and editing skills with resources that offer guidance on structuring your papers, avoiding common pitfalls, and refining your writing style. Perfect for creating high-quality publications.</p>
                        </li>
                        <li>
                            <h4>Research Assistance Services</h4>
                            <p>Get expert help with conducting and documenting your research. Our services include assistance with literature reviews, data collection, and the preparation of research reports and presentations.</p>
                        </li>
                    </ul>
                </div>

                <div className="featured-resources">
                    <h3>Featured Resources</h3>
                    <div className="resource-item">
                        <h4>Ultimate Guide to Data Analysis</h4>
                        <p>A comprehensive guide that walks you through the essential steps of data analysis. Learn how to handle data sets, apply statistical techniques, and interpret results effectively.</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="resource-item">
                        <h4>Best Practices in Academic Writing</h4>
                        <p>Discover the best practices for academic writing, including tips for structuring your arguments, ensuring clarity, and maintaining academic integrity throughout your research papers.</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="resource-item">
                        <h4>Top Project Management Tools for Researchers</h4>
                        <p>Explore our top picks for project management tools that can help streamline your research workflow. Find tools that offer task management, collaboration features, and progress tracking.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>

                <div className="recent-articles">
                    <h3>Recent Articles</h3>
                    <ul>
                        <li>
                            <h4>How to Manage Multiple Research Projects Effectively</h4>
                            <p>Learn strategies for balancing multiple research projects and staying organized. This article provides actionable tips and tools to help you manage your workload.</p>
                        </li>
                        <li>
                            <h4>Advanced Data Visualization Techniques</h4>
                            <p>Enhance your data presentations with advanced visualization techniques. Explore different types of charts and graphs that can help convey your data insights more effectively.</p>
                        </li>
                        <li>
                            <h4>Enhancing Your Research Through Collaboration</h4>
                            <p>Understand the benefits of collaboration in research and discover ways to build productive partnerships with fellow researchers and professionals.</p>
                        </li>
                    </ul>
                </div>

                <div className="tools-software">
                    <h3>Essential Tools & Software</h3>
                    <ul>
                        <li>Statistical Analysis Software</li>
                        <li>Reference Management Tools</li>
                        <li>Collaboration Platforms</li>
                        <li>Writing Assistance Software</li>
                    </ul>
                </div>

                <div className="research-databases">
                    <h3>Key Research Databases</h3>
                    <ul>
                        <li>PubMed</li>
                        <li>Google Scholar</li>
                        <li>JSTOR</li>
                        <li>IEEE Xplore</li>
                    </ul>
                </div>

                <div className="guides-tutorials">
                    <h3>Guides & Tutorials</h3>
                    <ul>
                        <li><a href="#">Guide to Academic Research Methodology</a></li>
                        <li><a href="#">Tutorial: Using Data Analysis Software</a></li>
                        <li><a href="#">How to Write a Successful Research Proposal</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ResearchResources;
