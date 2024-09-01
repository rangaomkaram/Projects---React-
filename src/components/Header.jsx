import reactImg from '../assets/react-core-concepts.png';


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

export default Header;