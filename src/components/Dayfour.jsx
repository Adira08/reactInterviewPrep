import React from 'react';
import UseRef from './UseRef';
import UseRefImg from '../images/UseRefImg.png';
import LifeCycle from '../images/LifeCycle.png'

const Dayfour = () => {
  return (
    <>
    <h1><u>React Interview Question Day Four</u></h1>
    <br />
    <h2>1. What is UseRef Hook ?(Implementation)</h2>
    <p>The useRef hook is the new addition in React 16.8 <br />
    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br />
    <u>Syntax:</u><br />
    <b>const refContainer = useRef(initialValue);</b> <br />
    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
    <UseRef />
    <br />
    <img src={UseRefImg} alt="" />

    <hr />

    <h2>2. What is Context api?</h2>
    <p>The previous version of Context Api was experimental whereas the new version in React 16+ is more stable and efficient. <br />
    Context API is used to pass global variables anywhere in the code. It helps when there is a need for sharing state between a lot of nested components. <br />
    It is light in weight and easier to use, to create a context just need to call React.createContext(). <br />
    No need to install other dependencies or third-party libraries like redux for state management. <br /><br />
    It has two properties Provider and Consumer. The Provider acts as a parent it passes the state to its children whereas the Consumer uses the state that has been passed.
    <br />
    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
    </p>

    <hr />
    <h2>3. Difference between callback and useCallback Hook ?</h2>
    <p>
        <u><b>callback : </b></u>
        <ul>
            <li>A callback is a function passed as an argument to another function. This technique allows a function to call another function.</li>
            <li>A callback function can run after another function has finished.</li>
        </ul>

        <u><b>useCallback : </b></u>
        <ul>
            <li>The useCallback hook is used when you have a component in which the child is rerendering again and again without need.</li>
            <li>Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.</li>
            <li>This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</li>
        </ul>
    </p>

    <hr />
    <h2>3. What is Props Drilling Concept ?What is State Uplifting ?</h2>
    <p>
    <u><b>Props Drilling Concept : </b></u>
    <ul>
        <li>Props drilling referes to the process of passing data from the parent components to the final destination of child component and if there is nested comonent present in the child component then in order to passing the components from parent then other components present in the child components owing the props just to pass it down to the chain.This process is known as props drilling.</li>
        <li>To avoid prop drilling,it is recommended to use useContext hook which is based on context API and it works with mechnism of provider and consumer.</li>
    </ul>

    <u><b>State Uplifting : </b></u>
    <ul>
        <li>State upLifting - when several components needs to share same changing data then its is recommended to lift the shared data state up to their closed ancestor.</li>
        <li>So,if two child component uses same data from its parents component,then move the state to parent instead of maintaing local state in both of the child component.</li>
    </ul>
    </p>

    <hr />
    <h2>4. Difference between useEffect and useContext ?</h2>
    <p>
        <u><b>useEffect()</b></u>
        <ul>
            <li>useEffect hook allow us to implement the lifecycle methods in the functional components.</li>
            <li>CompoentDidMount(),componentDidUpdate() and compinentWillUnmount() methods gets triggered in the useEffect hook function.</li>
        </ul>
        <u><b>useContext</b></u>
        <ul>
            <li>useContext() hook allow us to work with react's context API which itself a mechanism to allow us to share data within its components tree without passing data through props.</li>
            <li></li>
        </ul>
    </p>

    <hr />
    <h2>What are React Life cycles Explain each one with Example?</h2>
    <img src={LifeCycle} alt="" height='500px' width='900px' />
    <p>Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.</p>

    <h3><u>Mounting</u></h3>
    <p>Mounting means putting elements into the DOM. <br />
        React has four built-in methods that gets called, in this order, when mounting a component:</p>
    <ul>
        <li>constructor()</li>
        <li>getDerivedStateFromProps()</li>
        <li>render()</li>
        <li>componentDidMount()</li>
    </ul>
    <p>The render() method is required and will always be called, the others are optional and will be called if you define them.</p>
    <p><u>Constructor</u></p>
    <p>The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values. <br /> The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).</p>
    <p><u>Render</u></p>
    <p>The render() method is required, and is the method that actually outputs the HTML to the DOM.</p>
    <p><u>ComponentDidMount</u></p>
    <p>The componentDidMount() method is called after the component is rendered. <br />This is where you run statements that requires that the component is already placed in the DOM.</p>

    <h3><u>Updating</u></h3>
    <p>The next phase in the lifecycle is when a component is updated. <br />
    A component is updated whenever there is a change in the component's state or props. <br />
    React has five built-in methods that gets called, in this order, when a component is updated:</p>
    <ul>
        <li>getDerivedStateFromProps()</li>
        <li>shouldComponentUpdate()</li>
        <li>render()</li>
        <li>getSnapshotBeforeUpdate()</li>
        <li>componentDidUpdate()</li>
    </ul>
    <p>The render() method is required and will always be called, the others are optional and will be called if you define them. <br />
    The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.</p>

    <p><u>componentDidUpdate</u></p>
    <p>The componentDidUpdate method is called after the component is updated in the DOM. <br />
    This action triggers the update phase, and since this component has a componentDidUpdate method, this method is executed and writes a message in the empty DIV element.</p>

    <h3><u>Unmounting</u></h3>
    <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it. <br />
    React has only one built-in method that gets called when a component is unmounted .</p>
    <ul>
        <li>componentWillUnmount()</li>
    </ul>
    <p>The componentWillUnmount method is called when the component is about to be removed from the DOM.</p>



    </>
  )
}

export default Dayfour