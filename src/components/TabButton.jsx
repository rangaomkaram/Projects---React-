// TabButton

// Concept : Component Composition , The Special "Children" Prop

/* 

AppComponent:

<Course>
<h2>React Course</h2>
<p>Do you want to Subscribe this Course?</p>
</Course>

-> Content for Children : The content between component opening and closing tags is used as a value for the special "children" prop.

Course Component : 

function Course(props){
    return <div id="Course-id">{props.children}</div>
}

props.children -> The "Children pop" React automatically passes a special prop named "children" to every custom component.



*/
function TabButton(){

}