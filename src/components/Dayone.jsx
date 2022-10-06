import React from 'react'

const Dayone = () => {
  return (
    <>
    <h1><u>React Interview Preparation Day One</u></h1>
    <br />
    <h2>1. What is Virtual DOM?</h2>
    <p>The <u><b>Virtual DOM (VDOM)</b></u> is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation. 
    <br />
    DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time., whenever React components gets mounted on the screen for the first time. Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM. So we are having two virtual doms, one virtual dom gets created at the time of mounting of react component so it is a copy of your real dom. Another virtual dom is the dom which contains the new changes, updated state variables values. Now these two virtual doms will get compared with each other and will check for the new changes. this complete procedure is known as diffing algorithm. Now the new changes will be updated in your Real dom. this procedure is known as Recoinciliation.</p>
    <hr />
    <h2>2. What is SPA?</h2>
    <p><u><b>Single page application</b></u> : Any web application , in which when you are clicking on any button or selecting option from navigation bar then if your page which means browser page is reloading then that means that application is your multi - page application . If it does not reload the browser page and just only updates the page without reloading then that application is known as Single Page application. When you create React application using CRA, (create-react-app boilerplate , developed by Facebook) it always create the application which will be Single page application.</p>
    <hr />
    <h2>3.What is difference between class and functional component?</h2>
    <p><b><u>Class Components:</u></b></p>
    <ul>
        <li>A class component requires you to extends from React.Component and creates a render function which retirn a react element.</li>
        <li>It must have the render() method returning the JSX which is syntactically similar to HTML.</li>
        <li>It also known as "Stateful component" as they implemet logic and state.</li>
        <li>React lifecycle method can be used inside the class component.</li>
        <li>Constructor are used in class component as it need to stored the data and initializes the state.</li>
    </ul>
    <p><b><u>Functional Component:</u></b></p>
    <ul>
        <li>A functional component is just a plain javascript function that accepts props as an arguments & returns a react elements.</li>
        <li>There is no render method used in functional component.</li>
        <li>It is also known as stateless component as they simply accepts data abd display them in some form.</li>
        <li>React lifecycle methods cannot be used in the functional component.</li>
        <li>Constructors are not used in the functional compoenent.</li>
    </ul>
    <hr />
    <h2>4. What does mean by state and its use in react?</h2>
    <p>A <u><b>state</b></u> is data conatiner in which we can store the data or information about the compoenent.</p>
    <p><u><b>Uses of States</b></u></p>
    <ul>
        <li>A state can be modified based on user action.</li>
        <li>Every time the state of an object changes,the react will re-rendered the component to the browser.</li>
        <li>The state of an object can store multiple properties.</li>
    </ul>
    <hr />
    <h2>5. What is JSX and why do we use it instead of js?</h2>
    <p><u><b>JSX</b></u> is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.</p>
    <p><u><b>JSX or JavaScript XML</b></u> is combines HTML and JavaScript, making the code easier to read and understandable for the user. JSX combines interactivity with markup rather than separating the two. It makes it easier to visualize DOM.</p>
    <p>We <u><b>use JSX</b></u> instead of JS because it make easier for user to make the react application as it is similar to HTML and also it make easier to read and update HTML code,thus functionality is easier to handlw with JSX.</p>
    <hr />
    <h2>6. What is package.json?</h2>
    <p></p>
    <p><b>Package.json = Metadata associated with project + All Dependencies with version + scripts</b></p>
    <p>A package.JSON is JSON file that exists at the root of node project. It holds metadata relevant to the project and it is used for managing the projects version dependencies,scripts,version and whole a lot more for projects.</p>
    <hr />

    

    </>
  )
}

export default Dayone