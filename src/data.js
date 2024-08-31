import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import stateMgMtImg from './assets/state-mgmt.png';
import jsxImg from './assets/jsx-ui.png';

export const CORE_CONCEPTS = [
    {
        image : componentsImg,
        title : 'Components',
        description : 'The Core UI building blocks - compose the user interface by combining multiple components.',
    },
    {
        image : propsImg,
        title : 'Props',
        description : 'Pass data from parent to child components(Make components configurable(and therefore reusable) by passing input data to them).',
    },
    {
        image : jsxImg,
        title : 'JSX',
        description : 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
    },
    {
        image: stateMgMtImg,
        title: 'State Management',
        description : "React-managed data which, when changed, causes the component to re-render & the UI to update."
    }
]