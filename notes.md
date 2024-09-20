### for dynamic output , we use curly braces like object {}  Note : In Curly braces , only use immediate result expression -> don't use for-loops,if-statements,functions



### now output dynamically for images ->
			-> the below apporach the src attribute value point directly my source folder , which leads  image might lost, when we prepare this react project for deployment, when this process happen, image files, when loaded like below, might be ignored by that bundling process ->so better import the images.

        ```jsx
			{/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
        ```
			-> from below apporach , since it's a javascript varaible that will inculde a  path to image -> note: it will include an automatically generated path that will also work once, deploy the React app to a server 

/* 

AppComponent:

```jsx
<Course>
<h2>React Course</h2>
<p>Do you want to Subscribe this Course?</p>
</Course>
```

-> Content for Children : The content between component opening and closing tags is used as a value for the special "children" prop.

Course Component : 
```javascript

function Course(props){
    return <div id="Course-id">{props.children}</div>
}

/* props.children -> The "Children pop" React automatically passes a special prop named "children" to every custom component. */

function TabButton(props){
    return <li><button>{props.children}</button></li>

} 

// Instead we can use destructuring props with children:

```

### How React check if UI updates are needed.

1. React uses a virtual DOM (a lightweight in-memory representation of the real DOM) to optimize rendering.
2. When the state or props of a component change, React updates the virtual DOM.
3. React then compares the virtual DOM with the real DOM to determine what changes are needed.
4. React updates the real DOM by making the necessary changes.
5. React compares the old output ("old jsx code") of component function to the new output ("new jsx code") and applies any differences  to the actual webiste UI.
6. React uses a technique called "diffing" to compare the old and new output and determine

### Diffing :
   1. React builds a new virtual DOM by calling the component's render method.
   2. React compares the new virtual DOM to the old virtual DOM.
   3. React determines the minimum number of changes needed to update the real DOM.
   4. React applies these changes to the real DOM.
   5. The real DOM is updated, and the UI is refreshed.

Example:

```jsx
function Clock(props) {
  return (
    <div>
      <h1>{props.date.toLocaleTimeString()}</h1>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

In this example, the `tick` function is called every second, updating the `date` prop of the `Clock` component. React uses diffing to compare the old and new output of the `Clock` component and applies the necessary changes to the real DOM.

```jsx
import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default LifeCycle;
```
- update the state with the current date every second, which in turn triggers a re-render of the component. This process continues until the component is unmounted, at which point the clearInterval function is called to stop the timer.

```jsx
// Interface Segregation Principle (ISP) continued...
interface Editable {
  edit(): void;
}

class TextDocument extends Document implements Editable {
  edit(): void {
    console.log("Editing text document");
  }
}

// Dependency Inversion Principle (DIP) continued...
class AdvancedCalculator extends Calculator {
  private history: number[];

  constructor(logger: Logger) {
    super(logger);
    this.history = [];
  }

  calculate(a: number, b: number): number {
    const result = super.calculate(a, b);
    this.history.push(result);
    return result;
  }

  getHistory(): number[] {
    return this.history;
  }
}
```
```jsx
// Single Responsibility Principle (SRP)
// A component should have only one reason to change.

function Profile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  );
}

// Open/Closed Principle (OCP)
// A component should be open for extension but closed for modification.

function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

// Liskov Substitution Principle (LSP)
// Derived classes should be substitutable for their base classes.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

// Interface Segregation Principle (ISP)
// A client should not be forced to depend on interfaces it does not use.

interface Printable {
  print(): void;
}

interface Shareable {
  share(): void;
}

class Document implements Printable, Shareable {
  print(): void {
    console.log("Printing document");
  }

  share(): void {
    console.log("Sharing document");
  }
}

// Dependency Inversion Principle (DIP)
// High-level modules should not depend on low-level modules, but both should depend on abstractions.

class Logger {
  log(message: string): void {
    console.log(message);
  }
}

class Calculator {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  calculate(a: number, b: number): number {
    const result = a + b;
    this.logger.log(`Result: ${result}`);
    return result;
  }
}
```

```jsx
// Single Responsibility Principle (SRP)
// A component should have only one reason to change.

function Profile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  );
}

// Open/Closed Principle (OCP)
// A component should be open for extension but closed for modification.

function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}

// Liskov Substitution Principle (LSP)
// Derived classes should be substitutable for their base classes.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

// Interface Segregation Principle (ISP)
// A client should not be forced to depend on interfaces it does not use.

interface Printable {
  print(): void;
}

interface Shareable {
  share(): void;
}

class Document implements Printable, Shareable {
  print(): void {
    console.log("Printing document");
  }

  share(): void {
    console.log("Sharing document");
  }
}

// Dependency Inversion Principle (DIP)
// High-level modules should not depend on low-level modules, but both should depend on abstractions.

class Logger {
  log(message: string): void {
    console.log(message);
  }
}

class Calculator {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  calculate(a: number, b: number): number {
    const result = a + b;
    this.logger.log(`Result: ${result}`);
    return result;
  }
}
```

```jsx
// State in React

// State is an object that stores the current state of a component.
// It is used to store data that changes over time, such as user input, API responses, or other dynamic data.

// Creating State
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' and an 'setCount' function to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// Updating State
// Use the 'setCount' function to update the state
// You can also use the callback function to update the state based on the previous state
const [count, setCount] = useState(0);
setCount(prevCount => prevCount + 1);

// Using State in Class Components
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
      </div>
    );
  }
}
```

### useState() Yields a array with Two Elements 
- The `useState()` hook returns an array with two elements: the current state value and a function to update that state value.
- by using destructuring in Javascript - we can get the two values as shown

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  // count is the current state value
  // setCount is the function to update the state value
  return (
    <>
    <p>Count: {count}</p>
    </>
  )
}
```

### RULES OF HOOKS
1. Only call hooks at the top level of your React function. Don't call them inside loops
2. Only call hooks inside of the Component Fucntions.

### Examples 

- Valid Statements

```jsx
// Valid expressions for inside of Component Functions

function App(){
  const [count, setCount] = useState(0);
}

```
- Not Valid Statements

```jsx
// not valid - calling outside functions
const [count, setCount] = useState(0);
function App(){
  // so on
}

// not valid - calling in nested  code statements

function App(){
  if(booleanExpression){
    const[count, setCount] = useSate(0);
  }
}

```

### Manage State

- Manage data & tell React to re-execute a component function via React's useState() Hook
- State updates lead to new state values (as the component execute again)

```jsx

const [counter, setCount] = useState(0);

// counter - current state value  provided  by react May change if the function is execute again.

// setCounter(state updating function) :
/* Update the stored value & "tells" React to re-execute the component function in which useState() was called */

// 0 -> initial State value - Stored by react .



```


### Conditional Rendering 
- Conditional rendering is a feature in React that allows you to render different components or elements based on a condition.
- You can use the ternary operator to conditionally render elements.
- You can use the if-else statement to conditionally render elements.
- You can use the switch statement to conditionally render elements.
 


Example:
```jsx 
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign up.</h1>
      )}
    </div>
  );
}
```

```jsx
{!selectConcept && <p>Please Select Concept</p>}
					{selectConcept && (
						<div id="tab-content">
							<h3>{EXAMPLES[selectConcept].title}</h3>
							<p>{EXAMPLES[selectConcept].description}</p>
							<pre>
								<code>
									{EXAMPLES[selectConcept].code}
								</code>
							</pre>
						</div>
					)}
        {/* {!selectConcept ? <p>Please select a concept</p> : null} 
					{selectConcept ? <div id="tab-content"><h3>
						{EXAMPLES[selectConcept].title}
						</h3>
						<p>{EXAMPLES[selectConcept].description}</p>
						<pre>
							<code>
								{EXAMPLES[selectConcept].code}
							</code>
						</pre>
					</div> : null} */}
					
						{/* <h3>
							{EXAMPLES[selectConcept].title}
						</h3>
						<p>{EXAMPLES[selectConcept].description}</p>
						<pre>
							<code>
								{EXAMPLES[selectConcept].code}
							</code>
						</pre> */}
						{/* Condtional Rendering */}

```

1. List out the items dynamically

```jsx
// using map functions , we can list out the items dynamically

<ul>
// using map functions , we can list out the items dynamically

// concept of key prop , used to render each child in a list -> which helps to give unique value (id)
<ul>
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}

</ul>
{TODOLIST.map(listItem =><Todo{...listItem}/> )}
</ul>
```
2. we can style the dynamically using the state management technique

