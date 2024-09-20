// import 
// useState - hooks

import { useState } from 'react';
import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { EssentialConcepts } from './components/EssentialConcepts.jsx';
import ConceptExamples from './components/ConceptExamples.jsx';



function App() {

	// console.log("App Component Rendering");
	return (
		// concept of fargment
		<>
			{/* Header Component */}
      <Header />
			<main>
			<EssentialConcepts/>
			<ConceptExamples/>
		    </main>
		</>
	)
}

export default App
