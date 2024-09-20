import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export const EssentialConcepts = () => {
  return (
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
  )
}
