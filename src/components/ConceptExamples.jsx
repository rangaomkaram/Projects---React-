import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";


const ConceptExamples = () => {
    	// hook -useState
	// rules - must called in inside of components function , toplevel - don't use outside calling , nested code statements 

	const [selectConcept, setSelectedConcept] = useState("components")


	// Event Handler Function
	function selectHandler(buttonSelected) {
		// button select output in console as : 'components' , 'props', 'jsx', 'state'
		setSelectedConcept(buttonSelected)
		// console.log(selectConcept);
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
				
  return (
    <>
    <Section title="Examples" id="examples">
				<menu>

                    <TabButton isSelected={selectConcept === 'components'} onClick ={()=>selectHandler('components')}>Components</TabButton>
                    <TabButton isSelected = {selectConcept === 'props'}onClick={()=>selectHandler('props')}>Props</TabButton>
					<TabButton isSelected = {selectConcept === 'jsx'} onClick={()=>selectHandler('jsx')}>JSX</TabButton>
					<TabButton isSelected ={selectConcept === 'state'} onClick={()=>selectHandler('state')}>State</TabButton>

                </menu>
                    {tabButtonContent}
						
	</Section>
    </>
  )
}

export default ConceptExamples;