import React from 'react';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseReducer from './UseReducer';
import UseMemo from './UseMemo';
import UseStateimg from '../images/UseState.png';
import UseEffectImg from '../images/UseEffectImg.png';
import UseReducerImg from '../images/UseReducerImg.png';
import UseMemoImg from '../images/UseMemoImg.png';
import LifeCycle from '../images/LifeCycle.png';

const Daythree = () => {
  return (
    <>
    <h1><u>React Interview Question Day Three</u></h1>
    <br />
    <h2>1. Difference between Axios and fetch.</h2>
    <p><u><b>Axios</b></u></p>
    <ul>
        <li>In Axios,the data is sent through data property.</li>
        <li>Axios has URL in request object.</li>
        <li>Axios's data contains the objects.</li>
        <li>Axios performs automatic transformation of JSON data.</li>
        <li>Axios alllow cancelling request & request timeout.</li>
    </ul>
    <p><u><b>fetch</b></u></p>
    <ul>
        <li>In fetch,the data is sent through body property.</li>
        <li>Fetch has no URL in request object.</li>
        <li>Fetch's body has to be stringified.</li>
        <li>Fetch is a two step process when handling with JSON data,first one is to make the actual request & second one is to call .json() method on the response.</li>

    </ul>
    <hr />
    <h2>2. What is UseState Hook ?(Implementation)</h2>
    <p><u><b>UseEffect</b></u> is a hook that allow you to add the state to a functional component.You can pass the initial state to the function and it return a variable with the current state value & another function to update the state value.</p>
    <UseState />
    <br />
    <img src={UseStateimg} alt="" />

    <hr />
    <h2>3. What is useEffect Hook ?(Implementation)</h2>
    <p>By using <u><b>useEffect</b></u> Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
    <p>UseEffect :useEffect hook is designed to use lifecycle method in the functional component. <br />
    UsEffect hook gets triggered for the componentDidMount.componentDidUpdate and componentUnWillMOunt lifecycle.</p>
    <UseEffect />
    <br />
    <img src={UseEffectImg} alt="" />
    <hr />
    <h2>4. What is UseReducer Hook ?(Implementation)</h2>
    <p>The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.</p>
    <u><b>Syntax :</b></u>
    <p>const [state, dispatch] = useReducer(reducer, initialArgs, init);</p>
    <UseReducer />
    <br />
    <img src={UseReducerImg} alt="" />
    <hr />
    <h2>5. What is UseMemo Hook ?(Implementation)</h2>
    <p>The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs. For example, if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3, but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. In react also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application.</p>
    <u><b>Syntax :</b></u>
    <p>const memoizedValue = useMemo(functionThatReturnsValue, arrayDepencies)</p>
    <UseMemo />
    <br />
    <img src={UseMemoImg} alt="" />
    <br /><br />
    <h2><u>Extra Question</u></h2>
    <br />
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

export default Daythree