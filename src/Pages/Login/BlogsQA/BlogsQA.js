import React from 'react';

const BlogsQA = () => {
    return (
        <div className='mx-3'>
            <h1 className='text-center my-3'>This is answering question blogs pages</h1>
            <div>
                <h5>Q:13.1 Difference between javascript and nodejs?</h5>
                <p>Answer: JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.Let’s see the difference between javascript and nodejs:

                    `Javascript:
                    1.Javascript is a programming language that is used for writing scripts on the website. 
                    2.Javascript can only be run in the browsers.
                    3.It is basically used on the client-side.
                    4.Javascript is capable enough to add HTML and play with the DOM. 
                    5.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. 
                    6.Javascript is used in frontend development.
                    7.Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                    8.It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. `


                    `Node.JS:
                    1.NodeJS is a Javascript runtime environment.
                    2.We can run Javascript outside the browser with the help of NodeJS.
                    3.	It is mostly used on the server-side.
                    4.Nodejs does not have capability to add HTML tags.
                    5.V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                    6.Nodejs is used in server-side development.
                    7.Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. 8.Nodejs is written in C, C++ and Javascript.`
                </p>
            </div>
            <div>
            <h5>Q:13.2 When should you use nodejs and when should you use mongodb?</h5>
            <p>Answer:</p>
            </div>
            <div>
            <h5>Q:13.3 Differences between sql and nosql databases.?</h5>
            <p>Answer:</p>
            </div>
            <div>
            <h5>Q:13.4 What is the purpose of jwt and how does it work?</h5>
            <p>Answer:</p>
            </div>
        </div>
    );
};

export default BlogsQA;