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

/* function TabButton(props){
    return <li><button>{props.children}</button></li>

} */

// Instead we can use destructuring props with children:


function TabButton({children, onSelect, isSelected}){
    console.log("TabButton Component is Rendering")
    return(
    <li>
        {/* Event listener in react concpet we can directly use built-in Onclick function for button or any */}
        <button className = {isSelected ? 'active': undefined} onClick={onSelect}>{children}</button>
    </li>
        ) ;
}

// Apporach -2  using label

/* 

Using Children :

1. For the components that take a single piece of renderable content, this apporach is closer to a normal Usage of HTML page.

2. This apporach is especially convenient when passing JSX as a value to another component.

Using Attributes (label):

1. This apporach make sense if you have multiple smaller pieces of inforamtion that must be passed to a component.

2. Adding extra props instead of wrapping the content with component tags means extra work.




*/

/* function TabButton({label}) {
    return <li><button>{label}</button></li>
    
} */


export default TabButton;