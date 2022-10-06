import React from 'react'

const Dayfive = () => {
  return (
    <>
    <h1><u>React Interview Question Day Five</u></h1>
    <br />
    <h2>1. High Order Component in react js ?</h2>
    <p>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component. <br />
    <u>Syntax:</u> <br />
    <b>const EnhancedComponent = higherOrderComponent(OriginalComponent);</b>

    <u>Reason to use Higher-Order component:</u>
    <ul>
        <li>Easy to handle</li>
        <li>Get rid of copying the same logic in every component</li>
        <li>Makes code more readable</li>
    </ul>
    
    <hr />
    <h2>2. Do you know about SEO ? Is it true that react js supports SEO support.</h2>
    <p>
    SEO stands for search engine optimization, which is a set of practices designed to improve the appearance and positioning of web pages in organic search results. <br />
    Because organic search is the most prominent way for people to discover and access online content, a good SEO strategy is essential for improving the quality and quantity of traffic to your website.
    <br /><br />
    React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website. However, you should use some tricks to ensure that your React-site is understandable for Google crawlers and, therefore, good for SEO.
    </p>

    <hr />
    <h2>3. What is clean up in useEffect</h2>
    <p>clean up function: this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks. <br />
    Just like the name implies, the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up (arrange something in a neat and ordered way) our code before our component unmounts. <br />
    When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.
    <br /><br />
    The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens. ,<br />
    The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.</p>

    <hr />
    <h2>4. What is the use of useCallback and useMemo ?</h2>
    <p>
        <b><u>useCallback Hook:</u></b>
        <ul>
            <li>useCallback will return a memoized version of the callback function that oly change if one of the dependencies has changed.</li>
            <li>This is useful when passing callback to optimized child component.</li>
        </ul>
        <b><u>useMemo Hook:</u></b>
        <ul>
            <li>useMemo allow you to return a memoized value.</li>
            <li>You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</li>
        </ul>
    </p>

    <hr />
    <h2>5. Why do we need keys in react list?</h2>
    <p>
    The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. <br />
    To use keys, simply add the prop inside an element such as :
    <ul>
        <li>Unique IDs are the best value to assign to keys. (or) "Key" prop is used to look pretty, and there is no benefit whatsoever.</li>
        <li>"Key" prop is a way for React to identify a newly added item in a list and compare it during the "diffing" algorithm.</li>
        <li>It is one of the attributes in HTML. It is NOT commonly used in an array.</li>
    </ul>
    </p>

    <hr />
    <h2>6. Do you know about redux?</h2>
    <p>React-redux being a state management tool makes it easier to pass these states from one component to another irrespective of their position in the component tree and hence prevents the complexity of the application.</p>
    <p>When a react application holds various components in need of state from other components it becomes difficult to realize where the state should reside among these components to make it easier to maintain. <br />
    React-redux provides a store which makes the state inside components easier to maintain. <br />
    Along with stores, react-redux introduces actions and reducers which work simultaneously with stores to make the state more predictable.</p>



    </p>
    </>
  )
}

export default Dayfive