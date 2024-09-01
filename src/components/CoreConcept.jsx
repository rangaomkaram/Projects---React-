
// concept of Props : configuring components with 'props'
// props are immutable -> cannot be changed once passed to a component
// props are passed from parent to child component
// React allows you to pass the data to components via a concept called "props"

// Understanding the concept of props

/* 

Here in this example , 

App Component is 

1. Set Props - Props are "Custom HTML attributes" set on components.
2. Merge into Object - React merges all props into a single object {
	title : "Components";
	description : "Core UI"
}
3. Receive Props: Props are passed to the component function as the first argument by React

function CoreConcept(props){
	return <h3>{props.title}</h3>
}

<CoreConcept 
title = "compoents"
description = "Building UI blocks"
image = {componentsImg}

/>

*/

/* function CoreConcept(props){
	return(
		<li>
			<img src = {props.image} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
} */

/* Concept of Object Destructuring in Javascript 

Here the props is used to pass the parameter -> instead we can destructure the objects give the same name for parameters.

*/

function CoreConcept({image, title, description}){
	return(
		<li>
			<img src = {image} alt={title}/>
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}

export default CoreConcept;