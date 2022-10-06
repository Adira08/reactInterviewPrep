import React from 'react'

const Daysix = () => {
  return (
    <>
    <h1><u>React Interview Question Day Six</u></h1>
    <br />
    <h2>1. What is an event in react?</h2>
    <p>An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events. React has its own event handling system which is very similar to handling events on DOM elements. The react event handling system is known as Synthetic Events. The synthetic event is a cross-browser wrapper of the browser's native event.</p>

    <hr />
    <h2>2. What is memory leak and how to overcome?</h2>
    <p>Memory leak occurs when programmers create a memory in heap and forget to delete it.</p>
    <p>The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory.</p>
    <p>Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate.</p>
    <p>To avoid memory leaks, memory allocated on heap should always be freed when no longer needed.</p>

    <hr />
    <h2>3. Do you prefer function-based or class component and why ?</h2>
    <p>There are different reasons why functional components are better than class components for Reactjs development, and here are the most prominent ones:</p>
    <ul>
        <li>It is a simple JS function that simply returns HTML UI</li>
        <li>Accept properties in function and return HTML</li>
        <li>Functional gives the solution with or without using states</li>
        <li>No render method used</li>
        <li>Defined using arrow functions but can be created with the regular function keyword</li>
    </ul>
    <p>On the other hand, the class component has quite a complex UI logic. Also, it must have a render() method returning HTML.</p>

    <hr />
    <h2>4. Explain reducer as pure function in redux.</h2>
    <p>Reducer as pure function in redux as it takes an action and previous state of the application and retuen a new state.</p>
    <p>The action describes what users wants to perform and then the reducers return the new state based on that action.</p>

    <hr />
    <h2>5. Why do we use redux thunk?</h2>
    <p>Thunk is middleware that allow to handle asynchronous operations. <br />
     It also allow you to return a function rather than just action with redux in asynchronous manner.</p>

     <hr />
     <h2>6. What do you know about NPM?</h2>
     <p><b><u>NPM</u></b> stands for "Node package Module".It put all module in place so that node can find them. Using npm,we can install/download all the javascript packages.</p>
     <p>
     <b><u>Repository</u></b> – npm is a widely used repository for publishing open-source Node projects, where developers can share their source code with other npm users. Angular, React, and jQuery are some of the packages you can download from an npm repository.
     </p>
     <p>
     <b><u>Command-line interface (CLI)</u></b> – developers run the npm CLI from a terminal or a command-line tool to install or uninstall packages and manage versions or dependencies. Registry – any package or module you install using the npm CLI is downloaded from the npm public registry, the JavaScript software database.

     </p>



    </>
  )
}

export default Daysix