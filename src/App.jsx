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
			<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you
				are going to build!
			</p>
		</header>
	);
}

function App() {
	return (
		<div>
      <Header />
			<main>
				<h2>Time to get started!</h2>
			</main>
		</div>
	)
}

export default App
