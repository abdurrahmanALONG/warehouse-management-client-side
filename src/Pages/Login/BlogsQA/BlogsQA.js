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
                <p>`Answer:Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.

                    MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.

                   MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...

                    These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.</p>
            </div>
            <br></br>
            <br></br>
            <div>
                <h5>Q:13.3 Differences between SQL and NOSQL databases.?</h5>
                <p>Answer:

                    `What is SQL?:
                    Structured Query language (SQL) pronounced as “S-Q-L” or sometimes as “See-Quel” is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.SQL programming can be effectively used to insert, search, update, delete database records.That doesn’t mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing and maintenance of databases.Relational databases like MySQL Database, Oracle, Ms SQL Server, Sybase, etc. use SQL.`

                    `What is NoSQL?:
                    NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day. NoSQL database stands for “Not Only SQL” or “Not SQL.” Though a better term would NoREL NoSQL caught on. Carl Strozz introduced the NoSQL concept in 1998.Traditional RDBMS uses SQL syntax to store and retrieve data for further insights. Instead, a NoSQL database system encompasses a wide range of database technologies that can store structured, semi-structured, unstructured and polymorphic data.Next, we will discuss the key diff between SQL and NoSQL.`


                    Let’s see some KEY DIFFERENCE between SQL and NOSQL databases:
                    `1.SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases whereas NoSQL is a Non-relational or Distributed Database.

                    2.Comparing SQL vs NoSQL database, SQL databases are table based databases whereas NoSQL databases can be document based, key-value pairs, graph databases.

                    3.SQL databases are vertically scalable while NoSQL databases are horizontally scalable.

                    4.SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for unstructured data.
                    Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.`
                </p>
            </div>
            <br></br>
            <br></br>
            <div>
                <h5>Q:13.4 What is the purpose of jwt and how does it work?</h5>
                <p>Answer:

                    `What is JWT (JSON Web Token)?:
                    JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.

                    JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.

                    JWTs can be encrypted, but they are typically encoded & signed.  We will be focusing on Signed JWTs. The purpose of Signed JWT is not to hide the data but to ensure the authenticity of the data. And that is why it’s highly recommended to use HTTPS with Signed JWTs.`


                    `How JWT Works?:
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    Once decoded, you will get two JSON strings:
                    The header and the payload.
                    The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. `
                </p>
            </div>
        </div>
    );
};

export default BlogsQA;