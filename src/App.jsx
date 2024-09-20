// import 
// useState - hooks

import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES} from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



function App() {
	// hook -useState
	// rules - must called in inside of components function , toplevel - don't use outside calling , nested code statements 

	const [selectConcept, setSelectedConcept] = useState("components")


	// Event Handler Function
	function selectHandler(buttonSelected) {
		// button select output in console as : 'components' , 'props', 'jsx', 'state'
		setSelectedConcept(buttonSelected)
		console.log(selectConcept);
	}


    let tabButtonContent = <p>Please Select Concept</p>

	if(selectConcept){
			tabButtonContent =	<div id="tab-content">
							<h3>{EXAMPLES[selectConcept].title}</h3>
							<p>{EXAMPLES[selectConcept].description}</p>
							<pre>
								<code>
									{EXAMPLES[selectConcept].code}
								</code>
							</pre>
						</div>
					

			}		
				
	console.log("App Component Rendering");
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
					     {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
					     <CoreConcept {...CORE_CONCEPTS[1]}/>
					     <CoreConcept {...CORE_CONCEPTS[2]}/>
					     <CoreConcept {...CORE_CONCEPTS[3]}/> */}
						 {/* progamming dynamically using map function to list out the all items  */}
						 {/* {CORE_CONCEPTS.map(listItem => <CoreConcept {...listItem}/> )} */}

						 {/* using key prop */}
						{CORE_CONCEPTS.map((conceptList)=>{
						return	<CoreConcept key={conceptList.title} {...conceptList}/>
						})}
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
						{/* <TabButton label="Components" /> */}
						{/* <TabButton>Components</TabButton>
						<TabButton>Props</TabButton>
						<TabButton>JSX</TabButton>
						<TabButton>State</TabButton> */}
						{/* To make content Dynamically we use,  below apporach*/}
						{/* Reacting to Events */}
						{/* <TabButton onSelect ={SelectHandler} >Components</TabButton>
						<TabButton onSelect ={SelectHandler} >Props</TabButton>
						<TabButton onSelect ={SelectHandler} >JSX</TabButton>
						<TabButton onSelect ={SelectHandler} >State</TabButton> */}

						{/* Passing Custom Arguments to Event Functions */}

						<TabButton isSelected={selectConcept === 'components'} onSelect ={()=>selectHandler('components')}>Components</TabButton>

						<TabButton isSelected = {selectConcept === 'props'}onSelect={()=>selectHandler('props')}>Props</TabButton>
						<TabButton isSelected = {selectConcept === 'jsx'} onSelect={()=>selectHandler('jsx')}>JSX</TabButton>
						<TabButton isSelected ={selectConcept === 'state'} onSelect={()=>selectHandler('state')}>State</TabButton>


					</menu>

					
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

					{tabButtonContent}
						
				</section>
		    </main>
		</div>
	)
}

export default App
