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

props.children -> The "Children pop" React automatically passes a special prop named "children" to every custom component.

function TabButton(props){
    return <li><button>{props.children}</button></li>

} 

// Instead we can use destructuring props with children:

```

