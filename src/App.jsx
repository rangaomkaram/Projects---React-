// import 

import reactImg from './assets/react-core-concepts.png';
import componentsImg from "./assets/components.png";



// for dynamic output , we use curly braces like object {} 
// Note : In Curly braces , only use immediate result expression -> don't use for-loops,if-statements,functions

const reactDescriptions = ['Fundamental', "Core", "Essential", "Curical"]

// generate random indexs

function generateRandomindex(max_index) {
	return Math.floor(Math.random() * (max_index + 1));
	
}

function Header() {
	const description = reactDescriptions[generateRandomindex(3)]
	return (
		<header>
			{/* now output dynamically for images ->  */}
			{/* the below apporach the src attribute value point directly my source folder , which leads  image might lost, when we prepare this react project for deployment, when this process happen, image files, when loaded like below, might be ignored by that bundling process ->so better import the images */}

			{/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}

			{/* from below apporach , since it's a javascript varaible that will inculde a  path to image -> note: it will include an automatically generated path that will also work once, deploy the React app to a server */}

			<img src={reactImg} alt="React Image"/>
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you
				are going to build!
			</p>
		</header>
	);
}


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

function CoreConcept(props){
	return(
		<li>
			<img src = {props.image} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
}

function App() {
	return (
		<div>
      <Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concepts</h2>
					<ul>
						{/* props concept */}
						{/* props accept all values */}
						{/* example ->
						<UserInfo 
						name="John Doe";
						age = {34};
						details = {{username : "John Doe"}}
						hobbies = {['cooking', 'Reading']}
						/> */}
					

						<CoreConcept 
						    title = "Components" 
						    description = "The Core UI building blocks"
							image = {componentsImg}
						/>
						<CoreConcept />
						<CoreConcept />
						<CoreConcept />
					</ul>
				</section>

			</main>
		</div>
	)
}

export default App
