import React from 'react'
import routingimp from '../images/routingimp.png'

const Daytwo = () => {
  return (
    <>
    <h1><u>React Interview Questions Day Two</u></h1>
    <br />
    <h2>1. What is the Difference between react and react native? Which one is library or framework?</h2>
    <p><u><b>ReactJS</b></u></p>
    <ul>
        <li>React is used for creating websites, web apps, SPAs etc.</li>
        <li>React is a Javascript library used for creating UI hierarchy.</li>
        <li>It is responsible for rendering of UI components, It is considered as V part Of MVC framework.</li>
        <li>React’s virtual DOM is faster than the conventional full refresh model, since the virtual DOM refreshes only parts of the page, Thus decreasing the page refresh time.</li>
        <li>React uses components as basic unit of UI which can be reused this saves coding time.</li>
    </ul>
    <p><u><b>React Native</b></u></p>
    <ul>
        <li>React Native is a framework that is used to create cross-platform Native apps. It means you can create native apps and the same app will run on Android and ios.</li>
        <li>React native have all the benefits of ReactJS</li>
        <li>React native allows developers to create native apps in web-style approach.</li>
        <li>Front end developer can become mobile developer easily.</li>
    </ul>
    <hr />
    <h2>2. What is the package name you are using for routing?</h2>
    <p>React contains three different packages for routing. These are:</p>
    <ul>
        <li>
        <u><b>react-router:</b></u> It provides the core routing components and functions for the React Router applications.
        </li>
        <li><u><b>react-router-native:</b></u> It is used for mobile applications. It contains the React Native bindings for React Router</li>
        <li><u><b>react-router-dom:</b></u> It is used for web applications design. It contains the DOM bindings for React Router</li>
    </ul>
    <hr />
    <h2>3. Routing Implementation</h2>
    <img src={routingimp} alt="" />
    <hr />
    <h2>4. How do you pass data from parent to child?</h2>
    <p></p>
    <hr />
    <h2>5. What is lazy loading in react ?</h2>
    <p><u><b>Lazy loading</b></u> (also called on-demand loading) is an optimization technique for the online content, be it a website or a web app. Instead of loading the entire web page and rendering it to the user in one go as in bulk loading, the concept of lazy loading assists in loading only the required section and delays the remaining, until it is needed by the user.</p>
    <p>React has two native features that make it really simple and easy to implement lazy loading—React.lazy() and React.Suspense.</p>
    <p><u><b>Advantages of Lazy loading :</b></u></p>
    <li><u><b>Faster initial loading:</b></u> By reducing the page weight, lazy loading a web page allows for a faster initial page load time.</li>
    <li><u><b>Less bandwidth consumption:</b></u> Lazy-loaded images save data and bandwidth, particularly useful for individuals who don’t have fast internet or large data plans.</li>
    <li><u><b>Preserving system resources:</b></u> Lazy loading conserves server and client resources by requesting just a fraction of components.</li>
    <li><u><b>Reduced work for the browser:</b></u> When pictures are lazy-loaded, your browser does not need to process or decode them until they are requested by scrolling the page.</li>
    <hr />
    <h2>6. Difference b/w Stateful and stateless Component.</h2>
    <p>The literal difference is that one has state, and the other doesn’t. That means the stateful components are keeping track of changing data, while stateless components print out what is given to them via props, or they always render the same thing.</p>
    <p><u><b>Stateful component:</b></u></p>
    <ul>
        <li>A component that manages the state in class-based with state or functional with useState.</li>
        <li>In some component, the data keeps changing, for example, watching the cricket score etc.</li>
        <li>In most of the cases, the class-based components extend react component.</li>
        <li>Stateful components can use react life cycle hooks</li>
        <li>In stateful components it good to use the this instance</li>
    </ul>
    <p><u><b>Stateless component:</b></u></p>
    <ul>
        <li>A component that has no internal state management in it.</li>
        <li>Function components are simply functions that receive the props and return the JSX code.</li>
        <li>Stateless components can not use the react life cycle hooks</li>
        <li>Here need not to use this instance, they just receive the props as an argument</li>
    </ul>
    <hr />
    <h2>7. How do you switch one component to another, Conditional Rendering?</h2>
    <p>Way to Switch/Navigate from one page to another page ,Link, NavLink, Redirect Component ,history.push, history.replace Link Link is used to manage the navigation and it worked as an anchor tag. Check below code for the demonstration. import "Link" from 'react-router-dom'; ... ... About NavLink NavLink behaves the same as Link but in addition, it comes with a new attribute called “activeClassName” which helps us to add the class to the anchor tag when page url will match. import "NavLink" from 'react-router-dom';</p>
    <ul>
        <li>Routing</li>
        <li>Conditional rendering i.e, by using ternary operators</li>
    </ul>
    <hr />




    </>
  )
}

export default Daytwo