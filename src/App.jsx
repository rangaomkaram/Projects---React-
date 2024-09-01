// import 
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



function App() {
	return (
		<div>
			{/* Header Component */}
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
					

						{/* <CoreConcept 
						    title = {CORE_CONCEPTS[0].title}
						    description = {CORE_CONCEPTS[0].description}
							image = {CORE_CONCEPTS[0].image}
						/>
						<CoreConcept 
						    title = {CORE_CONCEPTS[1].title}
							description = {CORE_CONCEPTS[1].description}
							image = {CORE_CONCEPTS[1].image}
						/>
						<CoreConcept 
							title = {CORE_CONCEPTS[2].title}
							description = {CORE_CONCEPTS[2].description}
							image = {CORE_CONCEPTS[2].image} />
						<CoreConcept 
							title = {CORE_CONCEPTS[3].title}
							description = {CORE_CONCEPTS[3].description}
							image = {CORE_CONCEPTS[3].image}
						/> */}
					{/* CoreConcept Component */}

						{/* Making code improvement -> using curly braces , dynamically and spread operator to get the total data */}
					     <CoreConcept {...CORE_CONCEPTS[0]}/>
					     <CoreConcept {...CORE_CONCEPTS[1]}/>
					     <CoreConcept {...CORE_CONCEPTS[2]}/>
					     <CoreConcept {...CORE_CONCEPTS[3]}/>
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						{/* <li><button></button></li>
						<li><button></button></li>
						<li><button></button></li>
						<li><button></button></li>
						instead we can use resuable component */}
						{/* <TabButton>Components</TabButton> */}
						{/* apporach - label*/}
						<TabButton label="Components"></TabButton>
						<TabButton label="Props"></TabButton>
						<TabButton label="JSX"></TabButton>
						<TabButton label="State"></TabButton>
					</menu>
				</section>
		    </main>
		</div>
	)
}

export default App
