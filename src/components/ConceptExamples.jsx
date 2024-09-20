import { useState } from "react";
import { EXAMPLES } from "../data.js";
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
    <section id="examples">
					<h2>Examples</h2>
					<menu>

                    <TabButton isSelected={selectConcept === 'components'} onSelect ={()=>selectHandler('components')}>Components</TabButton>

						<TabButton isSelected = {selectConcept === 'props'}onSelect={()=>selectHandler('props')}>Props</TabButton>
						<TabButton isSelected = {selectConcept === 'jsx'} onSelect={()=>selectHandler('jsx')}>JSX</TabButton>
						<TabButton isSelected ={selectConcept === 'state'} onSelect={()=>selectHandler('state')}>State</TabButton>


					</menu>
                    {tabButtonContent}
						
				</section>
    </>
  )
}

export default ConceptExamples;